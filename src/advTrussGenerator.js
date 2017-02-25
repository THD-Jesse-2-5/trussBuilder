function generateAnchors(trussData, color) {
    var anchorMaterial = new THREE.MeshLambertMaterial({
        color: color,
        opacity: .5,
        transparent: true
    });
    var anchors = [];
    for(var j=0; j<trussData.walls.length; j++) {
        var wall = trussData.walls[j];
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

function generateWalls(trussData) {
    var wallSegments = [];
    for(var i=0; i<trussData.walls.length; i++) {
        var wall = trussData.walls[i];
        var wallMaterial = new THREE.MeshLambertMaterial({
            color: wall.color,
            opacity: .5,
            transparent: true
        });
        for(var j=0; j<wall.anchors.length - 1; j++) {
            var thisAnchor = wall.anchors[j];
            var nextAnchor = wall.anchors[j+1];
            var wallSegmentGeometry = new THREE.Geometry();
            wallSegmentGeometry.vertices.push(
                new THREE.Vector3(thisAnchor.x, thisAnchor.y, thisAnchor.z),
                new THREE.Vector3(thisAnchor.x, 0, thisAnchor.z),
                new THREE.Vector3(nextAnchor.x, nextAnchor.y, nextAnchor.z),
                new THREE.Vector3(nextAnchor.x, 0, nextAnchor.z)
            );
            wallSegmentGeometry.faces.push(
                new THREE.Face3(0,1,2),
                new THREE.Face3(1,2,3),
                new THREE.Face3(2,1,0),
                new THREE.Face3(3,2,1)
            );
            wallSegmentGeometry.computeFaceNormals();
            wallSegmentGeometry.computeVertexNormals();
            wallSegmentMesh = new THREE.Mesh(wallSegmentGeometry, wallMaterial);
            wallSegments.push(wallSegmentMesh);
        }
    }
    return wallSegments;
}
