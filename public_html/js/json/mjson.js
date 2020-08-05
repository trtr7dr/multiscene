var json = {
    
    "scene1": {
        "name": "scull",
        "gltf": "scene",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 0)",
        'start_position': {
            "x": 1000,
            "y": 0,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 2
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 1200,
                "z": 300 
            },
            "params": {
                0: 2.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 0, 0],
            "1": [750, -200, -400],
            "2": [600, 200, 400],
            "3": [500, -100, 0],
            "4": [200, 20, 0],
            "5": [0, 0, 0],
            "6": [-400, 0, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
        ],
        "slow_end_speed": true,
        "css": {
            "filter": "sepia(1) blur(1px)" 
        },
        "debug": false
    },
    
    "scene2": {
        "name": "land_squid",
        "gltf": "land",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        'start_position': {
            "x": 1000,
            "y": 50,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 2
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 1200,
                "z": 300 
            },
            "params": {
                0: 2.0,
                1: 3.0,
                2: 4.0
            }
        },
        "path": {
            "0": [1000, 100, 0],
            "1": [750, 50, -400],
            "2": [500, 20, 100],
            "3": [200, 20, -100],
            "4": [0, 20, 0],
            "5": [-400, 0, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "sepia(1) blur(1px)" 
        },
        "debug": false
    },
    "scene3": {
        "name": "monkey",
        "gltf": "mk",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        'start_position': {
            "x": 1000,
            "y": 50,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 2
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 1200,
                "z": 300 
            },
            "params": {
                0: 2.0,
                1: 3.0,
                2: 4.0
            }
        },
        "path": {
            "0": [1000, 100, 0],
            "1": [750, 50, -100],
            "2": [500, 20, -0],
            "3": [200, 50, 50],
            "4": [0, 50, 0],
            "5": [-400, 0, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "sepia(1) blur(1px) hue-rotate(150deg)" 
        },
        "debug": false
    },
    "scene4": {
        "name": "starway",
        "gltf": "alum",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        'start_position': {
            "x": 1000,
            "y": 0,
            "z": 50
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 2
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 1200,
                "z": 300 
            },
            "params": {
                0: 1.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 0, 50],
            "1": [750, 50, 100],
            "2": [500, 20, -0],
            "3": [200, -50, -50],
            "4": [120, -50, 0],
            "5": [0, -50, 0],
            "6": [-400, -50, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "sepia(1) blur(1px)" 
        },
        "debug": false
    },
    "scene5": {
        "name": "sifitrain",
        "gltf": "train",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        'start_position': {
            "x": 1000,
            "y": 0,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 1
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 0,
                "z": 0 
            },
            "params": {
                0: 1.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 0, 0],
            "1": [0, 0, 0],
            "2": [-400, -50, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
            'rotate_scene'
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "sepia(1) blur(1px) hue-rotate(150deg)" 
        },
        "debug": false
    },
    "scene6": {
        "name": "2lighthouse",
        "gltf": "lighthouse",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        "start_position": {
            "x": 1000,
            "y": 0,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 1
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 0,
                "z": 0 
            },
            "params": {
                0: 1.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 0, 0],
            "1": [750, 100, 100],
            "2": [600, 50, -50],
            "3": [450, -200, -300],
            "4": [300, -70, -100],
            "5": [200, 40, 300],
            "6": [0, 0, 0],
            "7": [-400, 0, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
            'rotate_scene'
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "sepia(1) blur(1px) hue-rotate(150deg)" 
        },
        "debug": false
    },
    "scene7": {
        "name": "flower",
        "gltf": "mak",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        "start_position": {
            "x": 1000,
            "y": 200,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 1
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 0,
                "z": 0 
            },
            "params": {
                0: 1.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 100, 0],
            "1": [750, 200, 100],
            "2": [600, 150, 70],
            "3": [450, 120, 50],
            "4": [300, 100, 100],
            "5": [200, 50, -100],
            "6": [0, 50, 0],
            "7": [-400, 50, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
        ],
        "slow_end_speed": true,
        "css": {
            "filter": "sepia(1) blur(1px)" 
        },
        "debug": false
    },
    "scene8": {
        "name": "2lighthouse",
        "gltf": "lighthouse",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        "start_position": {
            "x": 1000,
            "y": 0,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 1
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 0,
                "z": 0 
            },
            "params": {
                0: 1.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 0, 0],
            "1": [750, 100, 100],
            "2": [600, 50, -50],
            "3": [450, -200, -300],
            "4": [300, -70, -100],
            "5": [200, 40, 300],
            "6": [0, 0, 0],
            "7": [-400, 0, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
            'rotate_scene',
            'add_cube'
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "none" 
        },
        "debug": false
    },
    "scene9": {
        "name": "sifitrain",
        "gltf": "train",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        'start_position': {
            "x": 1000,
            "y": 0,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 1
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 0,
                "z": 0 
            },
            "params": {
                0: 1.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 0, 0],
            "1": [0, 0, 0],
            "2": [-400, -50, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
            'rotate_scene'
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "none" 
        },
        "debug": false
    },
    "scene10": {
        "name": "starway",
        "gltf": "alum",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        'start_position': {
            "x": 1000,
            "y": 0,
            "z": 50
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 2
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 1200,
                "z": 300 
            },
            "params": {
                0: 1.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 0, 50],
            "1": [750, 50, 100],
            "2": [500, 20, -0],
            "3": [200, -50, -50],
            "4": [120, -50, 0],
            "5": [0, -50, 0],
            "6": [-400, -50, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
            'add_cube'
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "none" 
        },
        "debug": false
    },
    "scene11": {
        "name": "monkey",
        "gltf": "mk",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        'start_position': {
            "x": 1000,
            "y": 50,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 2
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 1200,
                "z": 300 
            },
            "params": {
                0: 2.0,
                1: 3.0,
                2: 4.0
            }
        },
        "path": {
            "0": [1000, 100, 0],
            "1": [750, 50, -100],
            "2": [500, 20, -0],
            "3": [200, 50, 50],
            "4": [0, 50, 0],
            "5": [-400, 0, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
            'add_sphere'
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "blur(1px)" 
        },
        "debug": false
    },
    "scene12": {
        "name": "land_squid",
        "gltf": "land",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 238)",
        'start_position': {
            "x": 1000,
            "y": 50,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 2
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 1200,
                "z": 300 
            },
            "params": {
                0: 2.0,
                1: 3.0,
                2: 4.0
            }
        },
        "path": {
            "0": [1000, 100, 0],
            "1": [750, 50, -400],
            "2": [500, 20, 100],
            "3": [200, 20, -100],
            "4": [0, 20, 0],
            "5": [-400, 0, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
            'add_sphere'
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "blur(1px)" 
        },
        "debug": false
    },
    "scene13": {
        "name": "scull",
        "gltf": "scene",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 0)",
        'start_position': {
            "x": 1000,
            "y": 0,
            "z": 0
        },
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 2
        },
        "spot": {
            "color": "rgb(255, 255, 255)",
            "pos-x": 5,
            "pos-y": 20,
            "pos-z": 5,
            "angle": 0.50,
            "penumbra": 0.75,
            "intensity": 150,
            "decay": 1,
            "castShadow": true
        },
        "ray": {
            "enabled": true,
            "sun": "0x000000",
            "position": {
                "x": -1000,
                "y": 1200,
                "z": 300 
            },
            "params": {
                0: 2.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 0, 0],
            "1": [750, -200, -400],
            "2": [600, 200, 400],
            "3": [500, -100, 0],
            "4": [200, 20, 0],
            "5": [0, 0, 0],
            "6": [-400, 0, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 1000
        },
        'animation': true,
        "extra_func": [
            'add_cube'
        ],
        "slow_end_speed": true,
        "css": {
            "filter": "blur(1px)" 
        },
        "debug": false
    },
};