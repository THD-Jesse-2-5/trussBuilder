var trussData = {
        baseDimensions: {
            height: 120,
            width: 240,
            depth: 360
        },
        defaultTruss: {
            type: "basic",
            dimensions: {
                height: 96,
                width: 240,
                thickness: 2
            },
            loadBearing: false
        },
        trusses: [
            { position: 0, loadBearing: true },
            { position: 36 },
            { position: 72 },
            { position: 108 },
            { position: 144 },
            { position: 180, loadBearing: true },
            { position: 216 },
            { position: 252 },
            { position: 288 },
            { position: 324 },
            { position: 360, loadBearing: true },
        ]
};
