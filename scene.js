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
        "extra_func": [
        ],
        "slow_end_speed": true,
        "css": {
            "filter": "sepia(1) blur(1px)" 
        },
        "debug": true
    }
};
