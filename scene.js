var json = {
    "scene1": {
        "name": "scull",
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
        "extra_func": [
            'rotate_scene'
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "sepia(1) blur(1px) hue-rotate(150deg)" 
        },
        "debug": false
    }
};
