var advTrussData = {
    trusses: [{
        type: "basic",
        dimensions: {
            height: 96,
            width: 240,
            thickness: 4
        }
    }, {
        type: "basic",
        dimensions: {
            height: 96,
            width: 240,
            thickness: 4
        }
    }],
    walls: [{
        color: 0xff0000,
        anchors: [
            {x: 120, y: 120, z: 0},
            {x: 120, y: 120, z: 60},
            {x: 120, y: 120, z: 120},
            {x: 120, y: 120, z: 180},
            {x: 120, y: 120, z: 240},
            {x: 120, y: 120, z: 300},
            {x: 120, y: 120, z: 360},
            {x: 120, y: 120, z: 420},
            {x: 120, y: 120, z: 480}
        ],
        posts: [0,4,8]
    }, {
        color: 0xff0000,
        anchors: [
            {x: -120, y: 120, z: 0},
            {x: -120, y: 120, z: 60},
            {x: -120, y: 120, z: 120},
            {x: -120, y: 120, z: 180},
            {x: -120, y: 120, z: 240},
            {x: -120, y: 120, z: 300},
            {x: -120, y: 120, z: 360},
            {x: -120, y: 120, z: 420},
            {x: -120, y: 120, z: 480}
        ],
        posts: [0,4,8]
    }],
    connections:[{
        truss: 0,
        anchors: [
            { wall: 0, anchor: 0 },
            { wall: 1, anchor: 0 }
        ]}, {
        truss: 1,
        anchors: [
            { wall: 0, anchor: 4 },
            { wall: 1, anchor: 4 }
    ]}]
};
