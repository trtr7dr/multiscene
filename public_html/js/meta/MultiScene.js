/*
 * trtr7dr for sacri.ru
 * 
 * three.js / https://threejs.org/
 */

"use strict";

import * as THREE from '/three/build/three.module.js';

import { TrackballControls } from '/three/jsm/controls/TrackballControls.js';
import { GLTFLoader } from '/three/jsm/loaders/GLTFLoader.js';
import { DDSLoader } from '/three/jsm/loaders/DDSLoader.js';

import { GodRaysFakeSunShader, GodRaysDepthMaskShader, GodRaysCombineShader, GodRaysGenerateShader } from '/three/jsm/shaders/GodRaysShader.js';

var MultiScene = {

    json_load: function (data) {
        this.json = data;
    },

    set_scenes: function (id) {
        this.scene_id = id;
        this.sname = 'scene' + id;

        let start = this.json[this.sname]['start_position'];
        this.scenes = {
            Scene: {
                name: 'Main',
                url: '/assets/meta/multi/models/gltf/' + this.json[this.sname]['gltf'] + '.gltf',
                cameraPos: new THREE.Vector3(start['x'], start['y'], start['z']),
                animationTime: 4,
                extensions: ['glTF']
            }
        };
    },

    camera_create: function () {
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.maxDistance = 1000;
        this.controls.enabled = false;
    },

    init: function (gltf) {

        this.set_scenes(gltf);
        this.mobile = false;
        this.mob_delta = 0;
        this.clock = new THREE.Clock();
        this.container = document.getElementById('container');

        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        this.camera = new THREE.PerspectiveCamera(this.json[this.sname]['perspective'], this.container.offsetWidth / this.container.offsetHeight, 0.1, 1000);
        this.scene = new THREE.Scene();
        this.camera_create();
        this.step = 0;
        this.scroll_dist = 5;
        this.figure = {
            'cubes': [],
            'sphere': []
        };

        this.lookSpeed = 0.5;
        this.view = {
            "x": 0,
            "y": 0,
            "z": 0
        };
        this.lookFlag = false;
        this.smoothing = 50;
        this.keys = {
            'top': {
                'down': false,
                'code': 87,
                'param': 1,
                'axis': 'y',
                'smooth': false
            },
            'bottom': {
                'down': false,
                'code': 83,
                'param': -1,
                'axis': 'y',
                'smooth': false
            },
            'left': {
                'down': false,
                'code': 68,
                'param': -1,
                'axis': 'z',
                'smooth': false
            },
            'right': {
                'down': false,
                'code': 65,
                'param': 1,
                'axis': 'z',
                'smooth': false
            }
        };

        this.postprocessing = {enabled: this.json[this.sname]['ray']['enabled']};
        this.godrayRenderTargetResolutionMultiplier = 1.0 / 4.0;
        this.renderer.autoClear = false;
    },

    set_path: function () {
        let dots = this.json[this.sname]['path'];
        let vectors = [];
        for (let i = 0; i < Object.keys(dots).length; i++) {
            vectors.push(new THREE.Vector3(dots[i][0], dots[i][1], dots[i][2]));
        }
        this.spline = new THREE.CatmullRomCurve3(vectors);
        this.spline.closed = false;

        if (this.json[this.sname]['debug']) {
            let points = this.spline.getPoints(50);
            let geometry = new THREE.BufferGeometry().setFromPoints(points);
            let material = new THREE.LineBasicMaterial({color: 0xff0000});
            let curveObject = new THREE.Line(geometry, material);
            this.scene.add(curveObject);
        }
    },

    post_preparation: function () {
        let ray = this.json[this.sname]['ray'];
        this.sunColor = ray.sun;
        this.sunPosition = new THREE.Vector3(ray.position.x, ray.position.y, ray.position.z);
        this.clipPosition = new THREE.Vector4();
        this.screenSpacePosition = new THREE.Vector3();
    },

    onload: function () {
        this.container.style.background = this.json[this.sname]['background'];
        this.container.style.filter = this.json[this.sname]['css']['filter'];
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.physicallyCorrectLights = true;
        this.container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', this.on_window_resize, false);

        this.post_preparation();
        this.init_postprocessing(window.innerWidth, window.innerHeight);

        this.set_path();
        this.extra();
        this.init_scene(this.scenes[ 'Scene' ]);

    },

    extra: function () {
        let mark = this.json[this.sname]['extra_func'];
        if (mark.indexOf('add_img') !== -1) {
            this.add_img(1, [750, -100, -100]);
            this.add_img(3, [900, 5, 45]);
            this.add_img(3, [400, 40, 60]);
        }
        if (mark.indexOf('add_cube') !== -1) {
            for (let i = 0; i < 100; i++) {
                this.add_cube();
            }
        }
        if (mark.indexOf('add_sphere') !== -1) {
            for (let i = 0; i < 5; i++) {
                this.add_sphere();
            }
        }
    },

    gltf_load: function (url, time) {
        let loader = new GLTFLoader();
        loader.setDDSLoader(new DDSLoader());
        var self = this;
        loader.load(url, function (data) {
            var gltf = data;
            let object = gltf.scene;
            let animations = gltf.animations;
            self.mixer = new THREE.AnimationMixer(object);
            for (var i = 0; i < animations.length; i++) {
                var animation = animations[ i ];
                if (time) {
                    animation.duration = time;
                }
                var action = self.mixer.clipAction(animation);
                action.play();
            }
            self.add_obj(object);
            self.on_window_resize();
            self.animate();
            HTMLControlls.gltfReady();
        }, undefined, function (error) {
            console.error(error);
        });
    },

    init_scene: function (sceneInfo) {

        let fog = this.json[this.sname]['fog'];

        this.scene.fog = new THREE.Fog(new THREE.Color(fog.color), fog.near, fog.far);
        this.scene.add(this.camera);

        var ambient = new THREE.AmbientLight(this.json[this.sname]['ambient']);
        this.scene.add(ambient);

        let lgt = this.json[this.sname]['light'];
        let light = new THREE.HemisphereLight(lgt.sky, lgt.color, lgt.power);
        this.scene.add(light);

        let spotlight;
        let spt = this.json[this.sname]['spot'];
        spotlight = new THREE.SpotLight(new THREE.Color(spt.color), 1);
        spotlight.position.set(spt['pos-x'], spt['pos-y'], spt['pos-z']);
        spotlight.angle = spt['angle'];
        spotlight.penumbra = spt['penumbra'];
        spotlight.intensity = spt['intensity'];
        spotlight.decay = spt['decay'];
        spotlight.castShadow = spt['castShadow'];
        spotlight.shadow.bias = 0.001;
        spotlight.shadow.mapSize.width = 2048;
        spotlight.shadow.mapSize.height = 2048;
        this.scene.add(spotlight);
        this.renderer.shadowMap.enabled = true; //?
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.gltf_load(sceneInfo.url, sceneInfo.animationTime);
        this.camera.position.copy(sceneInfo.cameraPos);

    },

    add_obj: function (obj) {
        this.scene.add(obj);
    },

    on_window_resize: function () {
        MultiScene.camera.aspect = MultiScene.container.offsetWidth / MultiScene.container.offsetHeight;
        MultiScene.camera.updateProjectionMatrix();
        MultiScene.renderer.setSize(window.innerWidth, window.innerHeight);
    },

    animate: function () {
        requestAnimationFrame(MultiScene.animate);
        if (MultiScene.json[MultiScene.sname]['animation'])
            MultiScene.mixer.update(MultiScene.clock.getDelta());
        MultiScene.controls.update();
        MultiScene.render();
    },

    figure_scroll_rotate: function (d) {
        if (this.json[this.sname]['extra_func'].indexOf('add_sphere') !== -1) {
            this.figure.sphere.forEach((element) => {
                element.rotation.z += 0.01 * d;
                element.rotation.y += 0.01 * d;
                element.scale.x -= 0.008 * d;
                element.scale.y -= 0.008 * d;
                element.scale.z -= 0.008 * d;
            });
        }
    },

    rotate_scene: function (d) {
        if (this.json[this.sname]['extra_func'].indexOf('rotate_scene') !== -1) {
            this.scene.rotation.x += 0.01 * d;
        }
    },

    geom_anim: function () {
        if (this.json[this.sname]['extra_func'].indexOf('add_cube') !== -1) {
            this.figure.cubes.forEach((element) => {
                element.rotation.x += element.random / 10000;
                element.rotation.y += element.random / 10000;
                element.rotation.z += element.random / 10000;
            });
        }
    },

    post_render: function () {
        if (this.postprocessing.enabled) {
            this.clipPosition.x = this.sunPosition.x;
            this.clipPosition.y = this.sunPosition.y;
            this.clipPosition.z = this.sunPosition.z;
            this.clipPosition.w = 1;
            this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix);
            this.clipPosition.x /= this.clipPosition.w;
            this.clipPosition.y /= this.clipPosition.w;
            this.screenSpacePosition.x = (this.clipPosition.x + 1) / 2; // transform from [-1,1] to [0,1]
            this.screenSpacePosition.y = (this.clipPosition.y + 1) / 2; // transform from [-1,1] to [0,1]
            this.screenSpacePosition.z = this.clipPosition.z; // needs to stay in clip space for visibilty checks
            this.postprocessing.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);
            this.postprocessing.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);
            this.renderer.setRenderTarget(this.postprocessing.rtTextureColors);
            this.renderer.clear(true, true, false);
            var sunsqH = 0.8 * window.innerHeight; // 0.74 depends on extent of sun from shader
            var sunsqW = 0.8 * window.innerHeight; // both depend on height because sun is aspect-corrected
            this.screenSpacePosition.x *= window.innerWidth;
            this.screenSpacePosition.y *= window.innerHeight;
            this.renderer.setScissor(this.screenSpacePosition.x - sunsqW / 2, this.screenSpacePosition.y - sunsqH / 2, sunsqW, sunsqH);
            this.renderer.setScissorTest(true);
            this.postprocessing.godraysFakeSunUniforms[ "fAspect" ].value = window.innerWidth / window.innerHeight;
            this.postprocessing.scene.overrideMaterial = this.postprocessing.materialGodraysFakeSun;
            this.renderer.setRenderTarget(this.postprocessing.rtTextureColors);
            this.renderer.render(this.postprocessing.scene, this.postprocessing.camera);
            this.renderer.setScissorTest(false);
            this.scene.overrideMaterial = null;
            this.renderer.setRenderTarget(this.postprocessing.rtTextureColors);
            this.renderer.render(this.scene, this.camera);

            // Depth
            this.scene.overrideMaterial = this.materialDepth;
            this.renderer.setRenderTarget(this.postprocessing.rtTextureDepth);
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);
            this.postprocessing.godrayMaskUniforms[ "tInput" ].value = this.postprocessing.rtTextureDepth.texture;
            this.postprocessing.scene.overrideMaterial = this.postprocessing.materialGodraysDepthMask;
            this.renderer.setRenderTarget(this.postprocessing.rtTextureDepthMask);
            this.renderer.render(this.postprocessing.scene, this.postprocessing.camera);
            var filterLen = .8;
            var TAPS_PER_PASS = 6.0;
            this.filterGodRays(this.postprocessing.rtTextureDepthMask.texture, this.postprocessing.rtTextureGodRays2, this.getStepSize(filterLen, TAPS_PER_PASS, this.json[this.sname].ray.params[0]));
            this.filterGodRays(this.postprocessing.rtTextureGodRays2.texture, this.postprocessing.rtTextureGodRays1, this.getStepSize(filterLen, TAPS_PER_PASS, this.json[this.sname].ray.params[1]));
            this.filterGodRays(this.postprocessing.rtTextureGodRays1.texture, this.postprocessing.rtTextureGodRays2, this.getStepSize(filterLen, TAPS_PER_PASS, this.json[this.sname].ray.params[2]));
            this.postprocessing.godrayCombineUniforms[ "tColors" ].value = this.postprocessing.rtTextureColors.texture;
            this.postprocessing.godrayCombineUniforms[ "tGodRays" ].value = this.postprocessing.rtTextureGodRays2.texture;
            this.postprocessing.scene.overrideMaterial = this.postprocessing.materialGodraysCombine;
            this.renderer.setRenderTarget(null);
            this.renderer.render(this.postprocessing.scene, this.postprocessing.camera);
            this.postprocessing.scene.overrideMaterial = null;

        }
    },

    render: function () {
        this.geom_anim();
        this.post_render();
    },

    getStepSize: function (filterLen, tapsPerPass, pass) {
        return filterLen * Math.pow(tapsPerPass, -pass);
    },

    add_img: function (name, coord) {
        let loader = new THREE.TextureLoader();
        let geometry, material;
        let self = this;
        loader.load('/assets/meta/multi/texture' + name + '.png', function (texture) {
            geometry = new THREE.BoxGeometry(Math.random(2, 4), 50, 25);
            material = new THREE.MeshBasicMaterial({map: texture});
            let cube = new THREE.Mesh(geometry, material);
            cube.position.x = coord[0];
            cube.position.y = coord[1];
            cube.position.z = coord[2];
            self.scene.add(cube);
        });
    },

    rand_int: function (min, max) {
        return min + Math.floor((max - min) * Math.random());
    },

    add_cube: function () {
        let loader = new THREE.TextureLoader();
        let txt = Math.floor(Math.random() * Math.floor(14)) + 1;
        let self = this;
        loader.load('/assets/meta/multi/texture/' + txt + '.png', function (texture) {
            let rnd = self.rand_int(1, 50);
            let geometry = new THREE.BoxGeometry(rnd, rnd, rnd);
            let material = new THREE.MeshBasicMaterial({map: texture});
            let cube = new THREE.Mesh(geometry, material);
            cube.position.x = self.rand_int(1000, -1000);
            cube.position.y = self.rand_int(-500, 500);
            cube.position.z = self.rand_int(-500, 500);
            cube.rotation.x = self.rand_int(-90, 90);
            cube.rotation.y = self.rand_int(-90, 90);
            cube.rotation.z = self.rand_int(-90, 90);
            cube.random = self.rand_int(-100, 100);
            self.scene.add(cube);
            self.figure.cubes.push(cube);
        });
    },

    add_sphere: function () {
        let loader = new THREE.TextureLoader();
        let self = this;
        loader.load('/assets/meta/multi/texture/bone.jpg', function (texture) {
            let geometry = new THREE.SphereGeometry(self.rand_int(1, 10), self.rand_int(1, 10), self.rand_int(1, 10), self.rand_int(1, 20), self.rand_int(1, 10), self.rand_int(1, 20), self.rand_int(1, 20), self.rand_int(1, 20), self.rand_int(1, 20));
            let material = new THREE.MeshBasicMaterial({map: texture});
            let sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = self.rand_int(-400, 400);
            sphere.position.y = self.rand_int(-400, 400);
            sphere.position.z = self.rand_int(-400, 400);
            sphere.lightMapIntensity = 2;
            self.scene.add(sphere);
            self.figure.sphere.push(sphere);
        });
    },

    scroll_do: function (coord, curve) {
        $.doTimeout('loop' + coord, 1, function () {
            if (Math.abs(MultiScene.camera.position[coord] - curve[coord]) > 1) {
                let tmp = (MultiScene.camera.position[coord] > curve[coord]) ? -1 : 1;
                if (Math.abs(MultiScene.camera.position[coord] - curve[coord]) > (MultiScene.scroll_dist * 10)) {
                    curve[coord] += (MultiScene.scroll_dist * 2) * tmp * (-1);
                }
                MultiScene.camera.position[coord] += Math.abs(MultiScene.camera.position[coord] - curve[coord]) / (MultiScene.scroll_dist * 10) * tmp;
                if (MultiScene.camera.position.x < 4) { //проверка на окончание прокрутки
                    MultiScene.refresh();
                }
                return true;
            } else {
                return false;
            }
        });
    },

    do_step: function (d) {
        let nd = (d > 0) ? 1 : (-1);
        this.step += this.scroll_dist * (nd);
        return nd;
    },

    onWheel: function (e) {

        let delta;
        if (this.mobile) {
            delta = this.mob_delta;
            MultiScene.scroll_dist = 10;
        } else {
            e = e || window.event;
            delta = (e !== undefined) ? e.deltaY || e.detail || e.wheelDelta : 20;
        }

        delta = MultiScene.do_step(delta);
        MultiScene.figure_scroll_rotate(delta);
        MultiScene.rotate_scene(delta);
        MultiScene.step = (MultiScene.step < 0) ? 0 : MultiScene.step;
        let curve_coord = MultiScene.spline.getPoint(MultiScene.step / 600);
        MultiScene.scroll_do('y', curve_coord);
        MultiScene.scroll_do('z', curve_coord);
        MultiScene.scroll_do('x', curve_coord);
        MultiScene.scroll_dist = MultiScene.speed_in_end(5);

        if (!MultiScene.json[MultiScene.sname]['animation'])
            MultiScene.mixer.update(curve_coord.x / 2000);
    },

    speed_in_end: function (max_speed) {
        let res = max_speed;
        if (MultiScene.camera.position.x < 400 && this.json[this.sname]['slow_end_speed']) {
            res = (MultiScene.camera.position.x < 200) ? (res / 4) : (res / 2);
        }
        return res;
    },

    init_postprocessing: function (renderTargetWidth, renderTargetHeight) {
        this.postprocessing.scene = new THREE.Scene();

        this.postprocessing.camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, -10000, 10000);
        this.postprocessing.camera.position.z = 100;

        this.postprocessing.scene.add(this.postprocessing.camera);

        var pars = {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat};
        this.postprocessing.rtTextureColors = new THREE.WebGLRenderTarget(renderTargetWidth, renderTargetHeight, pars);

        this.postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget(renderTargetWidth, renderTargetHeight, pars);
        this.postprocessing.rtTextureDepthMask = new THREE.WebGLRenderTarget(renderTargetWidth, renderTargetHeight, pars);

        var adjustedWidth = renderTargetWidth * this.godrayRenderTargetResolutionMultiplier;
        var adjustedHeight = renderTargetHeight * this.godrayRenderTargetResolutionMultiplier;
        this.postprocessing.rtTextureGodRays1 = new THREE.WebGLRenderTarget(adjustedWidth, adjustedHeight, pars);
        this.postprocessing.rtTextureGodRays2 = new THREE.WebGLRenderTarget(adjustedWidth, adjustedHeight, pars);

        var godraysMaskShader = GodRaysDepthMaskShader;
        this.postprocessing.godrayMaskUniforms = THREE.UniformsUtils.clone(godraysMaskShader.uniforms);
        this.postprocessing.materialGodraysDepthMask = new THREE.ShaderMaterial({
            uniforms: this.postprocessing.godrayMaskUniforms,
            vertexShader: godraysMaskShader.vertexShader,
            fragmentShader: godraysMaskShader.fragmentShader
        });

        var godraysGenShader = GodRaysGenerateShader;
        this.postprocessing.godrayGenUniforms = THREE.UniformsUtils.clone(godraysGenShader.uniforms);
        this.postprocessing.materialGodraysGenerate = new THREE.ShaderMaterial({
            uniforms: this.postprocessing.godrayGenUniforms,
            vertexShader: godraysGenShader.vertexShader,
            fragmentShader: godraysGenShader.fragmentShader
        });

        var godraysCombineShader = GodRaysCombineShader;
        this.postprocessing.godrayCombineUniforms = THREE.UniformsUtils.clone(godraysCombineShader.uniforms);
        this.postprocessing.materialGodraysCombine = new THREE.ShaderMaterial({
            uniforms: this.postprocessing.godrayCombineUniforms,
            vertexShader: godraysCombineShader.vertexShader,
            fragmentShader: godraysCombineShader.fragmentShader
        });

        var godraysFakeSunShader = GodRaysFakeSunShader;
        this.postprocessing.godraysFakeSunUniforms = THREE.UniformsUtils.clone(godraysFakeSunShader.uniforms);
        this.postprocessing.materialGodraysFakeSun = new THREE.ShaderMaterial({
            uniforms: this.postprocessing.godraysFakeSunUniforms,
            vertexShader: godraysFakeSunShader.vertexShader,
            fragmentShader: godraysFakeSunShader.fragmentShader
        });

        this.postprocessing.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor);

        this.postprocessing.godrayCombineUniforms.fGodRayIntensity.value = 0.75;

        this.postprocessing.quad = new THREE.Mesh(
                new THREE.PlaneBufferGeometry(1.0, 1.0),
                this.postprocessing.materialGodraysGenerate
                );
        this.postprocessing.quad.position.z = -9900;
        this.postprocessing.scene.add(this.postprocessing.quad);
    },

    filterGodRays: function (inputTex, renderTarget, stepSize) {
        this.postprocessing.scene.overrideMaterial = this.postprocessing.materialGodraysGenerate;
        this.postprocessing.godrayGenUniforms[ "fStepSize" ].value = stepSize;
        this.postprocessing.godrayGenUniforms[ "tInput" ].value = inputTex;
        this.renderer.setRenderTarget(renderTarget);
        this.renderer.render(this.postprocessing.scene, this.postprocessing.camera);
        this.postprocessing.scene.overrideMaterial = null;
    },

    lookStop: function (e) {

        let r = false;
        for (var key in MultiScene.keys) {
            if (e === MultiScene.keys[key].code) {
                MultiScene.keys[key].down = false;
                MultiScene.keys[key].smooth = true;
            }
            r += MultiScene.keys[key].down;
        }
        if (r === 0) {
            MultiScene.lookFlag = false;
        }
    },

    lookAtTarget: function (e) {
        for (var key in MultiScene.keys) {
            if (e === MultiScene.keys[key]['code']) {
                MultiScene.keys[key].down = true;
                MultiScene.view[ MultiScene.keys[key]['axis'] ] += MultiScene.lookSpeed * MultiScene.keys[key]['param'];

            }
        }
        if (!MultiScene.lookFlag) {
            MultiScene.lookFlag = true;
            MultiScene.smoothing = 50;
            $.doTimeout('look', 20, function () {
                for (var key in MultiScene.keys) {
                    if (MultiScene.keys[key].down || MultiScene.keys[key].smooth) {
                        MultiScene.view[ MultiScene.keys[key]['axis'] ] += MultiScene.lookSpeed * MultiScene.keys[key]['param'] + MultiScene.smoothing / 200;
                        if(MultiScene.smoothing <= 1){
                            MultiScene.keys[key].smooth = false;
                        }
                    }
                }
                MultiScene.controls.target = new THREE.Vector3(MultiScene.view.x, MultiScene.view.y, MultiScene.view.z);
                if (MultiScene.lookFlag || MultiScene.smoothing > 1) {
                    MultiScene.smoothing = (MultiScene.smoothing <= 1) ? 50 : MultiScene.smoothing - 1;
                    return true;
                } else {

                    return false;
                }
            });
        }
    },

    refresh: function () {
        if (AudioControlls.flag) {
            AudioControlls.effects();
        }
        this.scene.rotation.x = 0;
        if (this.scene_id + 1 === 14) {
            HTMLControlls.lastScene();
            setTimeout(MultiScene.end_scenes, 700);
        } else {
            MultiScene.figure.cubes = [];
            MultiScene.figure.sphere = [];
            MultiScene.step = 0;
            MultiScene.scroll_dist = 5;
            MultiScene.camera.position.x = 1000;
            for (let i = MultiScene.scene.children.length - 1; i >= 0; i--) {
                MultiScene.scene.remove(MultiScene.scene.children[i]);
            }
            this.set_scenes((this.scene_id + 1));
            this.camera_create();
            MultiScene.onload();
        }
    },
    end_scenes: function () {
        for (let i = MultiScene.scene.children.length - 1; i >= 0; i--) {
            MultiScene.scene.remove(MultiScene.scene.children[i]);
        }
        HTMLControlls.endScene();
    }
};

// Старт событий и таймеров

MultiScene.json_load(json);
MultiScene.init(1);
MultiScene.onload();

$('#loader').on('mousewheel', function (e) {
    $.doTimeout('a_scroll');
    $('#play').removeClass("auto_scroll_on");
    MultiScene.onWheel();
});

var lastY;
$('#loader').on('touchmove', function (e) {

    MultiScene.mobile = true;
    var currentY = e.originalEvent.touches[0].clientY;
    MultiScene.mob_delta = (currentY > lastY) ? -1 : 1;
    lastY = currentY;
    $('#loader').trigger('mousewheel');
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    HTMLControlls.mobileIcon();
} else {
    setTimeout(HTMLControlls.drop_wsda, 15000);
}

var sauto = false;
$('#play').click(function () {

    if (sauto) {
        sauto = false;
        $.doTimeout('a_scroll');
        $('#play').removeClass("auto_scroll_on");
    } else {
        sauto = true;
        $('#play').addClass("auto_scroll_on");
        $.doTimeout('a_scroll', 200, function () {
            MultiScene.onWheel();
            return true;
        });
    }
});

$("body").keydown(function (e) {
    MultiScene.lookAtTarget(e.which);
});

$("body").keyup(function (e) {
    MultiScene.lookStop(e.which);
});

