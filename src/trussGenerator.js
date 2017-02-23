function generateTrussGeometry(truss) {
    switch(truss.type) {
        default:
            return generateBasicTrussGeometry(truss);
    }
}

function generateBasicTrussGeometry(truss) {
    var widthDelta = truss.dimensions.width / 2;
    var thicknessDelta = truss.dimensions.thickness / 2;
    var trussGeometry = new THREE.Geometry();
    // generate vertices
    trussGeometry.vertices.push(
        new THREE.Vector3(0, truss.dimensions.height, thicknessDelta),
        new THREE.Vector3(0, truss.dimensions.height, -thicknessDelta),
        new THREE.Vector3(widthDelta,0,thicknessDelta),
        new THREE.Vector3(widthDelta,0,-thicknessDelta),
        new THREE.Vector3(-widthDelta,0,thicknessDelta),
        new THREE.Vector3(-widthDelta,0,-thicknessDelta)
    );
    // generate faces
    trussGeometry.faces.push(
        new THREE.Face3(3,1,0),
        new THREE.Face3(0,2,3),
        new THREE.Face3(4,0,1),
        new THREE.Face3(1,5,4),
        new THREE.Face3(5,3,2),
        new THREE.Face3(2,4,5),
        new THREE.Face3(4,2,0),
        new THREE.Face3(1,3,5)
    );
    trussGeometry.computeFaceNormals();
    trussGeometry.computeVertexNormals();
    return trussGeometry;
}

function generateTestTrussGeometry(truss) {
    var widthDelta = truss.dimensions.width / 2;
    var thicknessDelta = truss.dimensions.thickness / 2;
    var trussGeometry = new THREE.Geometry();

    // front face
    trussGeometry.vertices.push(
        new THREE.Vector3(widthDelta, 0, thicknessDelta),
        new THREE.Vector3(-widthDelta, 0, thicknessDelta),
        new THREE.Vector3(0, truss.dimensions.height, thicknessDelta)
    );
    trussGeometry.faces.push(new THREE.Face3(0,2,1));
    // back face
    trussGeometry.vertices.push(
        new THREE.Vector3(widthDelta, 0, -thicknessDelta),
        new THREE.Vector3(-widthDelta, 0, -thicknessDelta),
        new THREE.Vector3(0, truss.dimensions.height, -thicknessDelta)
    );
    trussGeometry.faces.push(new THREE.Face3(3,4,5));
    trussGeometry.computeFaceNormals();
    trussGeometry.computeVertexNormals();
    return trussGeometry;
}
