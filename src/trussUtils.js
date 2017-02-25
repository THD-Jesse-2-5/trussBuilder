function generateAnchors(walls, color) {
    var anchorMaterial = new THREE.MeshLambertMaterial({
        color: color,
        opacity: .5,
        transparent: true
    });
    var anchors = [];
    for(var j=0; j<walls.length; j++) {
        var wall = walls[j];
        for(var i=0; i<wall.anchors.length; i++) {
            var anchorData = wall.anchors[i];
            var anchorGeometry = new THREE.SphereBufferGeometry(2,8,8);
            var anchorMesh = new THREE.Mesh(anchorGeometry, anchorMaterial);
            anchorMesh.position.set(
                anchorData.x,
                anchorData.y,
                anchorData.z
            );
            anchors.push(anchorMesh);
        }
    }
    return anchors;
}

function generateWalls(walls) {
    var wallSegments = [];
    for(var i=0; i<walls.length; i++) {
        var wall = walls[i];
        var wallMaterial = new THREE.MeshLambertMaterial({
            color: wall.color,
            opacity: .2,
            transparent: true
        });
        for(var j=0; j<wall.anchors.length - 1; j++) {
            var measurements = calculateMeasurements(wall.anchors[j], wall.anchors[j+1])
            var wallSegmentGeometry = new THREE.BoxGeometry(
                measurements.length,
                wall.anchors[j].y,
                1
            );
            var wallSegmentMesh = new THREE.Mesh(wallSegmentGeometry, wallMaterial);
            wallSegmentMesh.position.set(measurements.center.x,
                wall.anchors[i].y / 2,
                measurements.center.z);
            wallSegmentMesh.rotation.y = measurements.rotation.y;
            wallSegments.push(wallSegmentMesh);
        }
    }
    return wallSegments;
}

function generatePosts(walls) {
    var posts = [];
    var postMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    for (var i=0; i<walls.length; i++) {
        var wallPosts = walls[i].posts;
        var wallAnchors = walls[i].anchors;
        for (var j=0; j<wallPosts.length; j++) {
            var position = wallAnchors[wallPosts[j]];
            var postGeometry = new THREE.BoxGeometry(4, position.y, 4);
            var postMesh = new THREE.Mesh(postGeometry, postMaterial);
            postMesh.position.set(position.x, position.y/2, position.z);
            posts.push(postMesh);
        }
    }
    return posts;
}

function generateTrussMesh(trussData) {
    var trussMeshes = [];
    for (var i=0; i<trussData.trusses; i++) {
        // get the anchors
        var truss = trussData.trusses[i];
        var trussMeasurements = calculateTrussMeasurements(truss.anchors);

    }
}

function calculateMeasurements(anchor0, anchor1) {
    var xDistance = anchor1.x - anchor0.x;
    var zDistance = anchor1.z - anchor0.z;

    var xCenter = (anchor1.x + anchor0.x) / 2;
    var zCenter = (anchor1.z + anchor0.z) / 2;

    var xzLength = Math.sqrt(xDistance*xDistance + zDistance*zDistance);
    var thetaDirection = zDistance < 0 ? 1 : -1;
    var yRotation = Math.acos(xDistance * thetaDirection / xzLength);

    var center = new THREE.Vector3(xCenter, anchor1.y, zCenter);

    return {
        length: xzLength,
        center: center,
        rotation: { x:0, y: yRotation, z: 0 }
    };
}
