var json = {
    "scene1": {
        "name": "scull",
        "gltf": "mak",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(0, 255, 0)",
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
            "0": [1000, 200, 0],
            "1": [750, 200, -400],
            "2": [600, 200, 400],
            "3": [500, 200, 0],
            "4": [200, 120, 0],
            "5": [0, 100, 0],
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
        "debug": false
    },
    
    "scene2": {
        "name": "lighthouse",
        "gltf": "lighthouse",
        "perspective": 35,
        "background": "black",
        "ambient": "rgb(255, 255, 0)",
        "light": {
            'sky': "rgb(255, 0, 0)",
            'color': "rgb(255, 0, 102)",
            'power': 2
        },
        "spot": {
            "color": "rgb(0, 0, 0)",
            "pos-x": -105,
            "pos-y": 200,
            "pos-z": 500,
            "angle": 0.50,
            "penumbra": 0.5,
            "intensity": 50,
            "decay": 0,
            "castShadow": false
        },
        "ray": {
            "enabled": true,
            "sun": "0xffcc00",
            "position": {
                "x": -1000,
                "y": 100,
                "z": 300 
            },
            "params": {
                0: 1.0,
                1: 2.0,
                2: 3.0
            }
        },
        "path": {
            "0": [1000, 0, 0],
            "1": [700, -100, -200],
            "2": [500, -300, 100],
            "3": [200, -200, 400],
            "4": [0, 0, 0],
            "5": [-400, 0, 0]
        },
        "fog": {
            "color": "rgb(0, 0, 0)",
            "near": 10,
            "far": 500
        },
        "extra_func": [
        ],
        "slow_end_speed": false,
        "css": {
            "filter": "none" 
        },
        "debug": false
    }   
};
