var advTrussData = {
    trusses: [{
        type: "simple",
        dimensions: { height: 96, width: 240, thickness: 4 }
    }, {
        type: "simple",
        dimensions: { height: 96, width: 240, thickness: 4 }
    }, {
        type: "simple",
        dimensions: { height: 96, width: 240, thickness: 4 }
    }, {
        type: "simple",
        dimensions: { height: 96, width: 240, thickness: 4 }
    },{
        type: "simple",
        dimensions: { height: 96, width: 240, thickness: 4 }
    }, {
        type: "simple",
        dimensions: { height: 96, width: 240, thickness: 4 }
    },{
        type: "simple",
        dimensions: { height: 96, width: 240, thickness: 4 }
    }, {
        type: "simple",
        dimensions: { height: 96, width: 250, thickness: 4 }
    }],
    walls: [{
        color: 0x880000,
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
        color: 0x880000,
        anchors: [
            {x: -120, y: 120, z: 0},
            {x: -120, y: 120, z: 60},
            {x: -120, y: 120, z: 120},
            {x: -120, y: 120, z: 180},
            {x: -120, y: 120, z: 240},
            {x: -120, y: 120, z: 300},
            {x: -120, y: 120, z: 360},
            {x: -120, y: 120, z: 420}
        ],
        posts: [0,4,7]
    }],
    connections:[{
        truss: 0,
        anchors: [ { wall: 0, anchor: 0 }, { wall: 1, anchor: 0 } ]
    }, {
        truss: 1,
        anchors: [ { wall: 0, anchor: 1 }, { wall: 1, anchor: 1 } ]
    }, {
        truss: 2,
        anchors: [ { wall: 0, anchor: 2 }, { wall: 1, anchor: 2 } ]
    }, {
        truss: 3,
        anchors: [ { wall: 0, anchor: 3 }, { wall: 1, anchor: 3 } ]
    }, {
        truss: 4,
        anchors: [ { wall: 0, anchor: 4 }, { wall: 1, anchor: 4 } ]
    }, {
        truss: 5,
        anchors: [ { wall: 0, anchor: 5 }, { wall: 1, anchor: 5 } ]
    }, {
        truss: 6,
        anchors: [ { wall: 0, anchor: 6 }, { wall: 1, anchor: 6 } ]
    }, {
        truss: 7,
        anchors: [ { wall: 0, anchor: 8 }, { wall: 1, anchor: 7 } ]
    }]
};
