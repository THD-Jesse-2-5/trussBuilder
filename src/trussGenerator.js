function generateTrussGeometry(truss) {
    switch(truss.type) {
        case "simple":
            return generateSimpleTrussGeometry(truss);
        default:
            return generateDefaultTrussGeometry(truss);
    }
}

function generateSimpleTrussGeometry(truss) {
    var widthDelta = truss.dimensions.width / 2;
    var thicknessDelta = truss.dimensions.thickness / 2;
    var trussGeometry = new THREE.Geometry();
    var boardWidth = 8;
    // generate vertices
    trussGeometry.vertices.push(
        /*outer vertices*/
        new THREE.Vector3(0, truss.dimensions.height, thicknessDelta),
        new THREE.Vector3(0, truss.dimensions.height, -thicknessDelta),
        new THREE.Vector3(widthDelta,0,thicknessDelta),
        new THREE.Vector3(widthDelta,0,-thicknessDelta),
        new THREE.Vector3(-widthDelta,0,thicknessDelta),
        new THREE.Vector3(-widthDelta,0,-thicknessDelta),
        /*inner vertices*/
        new THREE.Vector3(0, truss.dimensions.height-boardWidth, thicknessDelta),
        new THREE.Vector3(0, truss.dimensions.height-boardWidth, -thicknessDelta),
        new THREE.Vector3(widthDelta-2*boardWidth,boardWidth,thicknessDelta),
        new THREE.Vector3(widthDelta-2*boardWidth,boardWidth,-thicknessDelta),
        new THREE.Vector3(-widthDelta+2*boardWidth,boardWidth,thicknessDelta),
        new THREE.Vector3(-widthDelta+2*boardWidth,boardWidth,-thicknessDelta)
    );
    // generate faces
    trussGeometry.faces.push(
        /*outside edges*/
        new THREE.Face3(3,1,0),
        new THREE.Face3(0,2,3),
        new THREE.Face3(4,0,1),
        new THREE.Face3(1,5,4),
        new THREE.Face3(5,3,2),
        new THREE.Face3(2,4,5),
        /*truss faces*/
        new THREE.Face3(4,2,8),
        new THREE.Face3(8,10,4),
        new THREE.Face3(4,10,6),
        new THREE.Face3(6,0,4),
        new THREE.Face3(0,6,8),
        new THREE.Face3(8,2,0),

        new THREE.Face3(3,5,11),
        new THREE.Face3(11,9,3),
        new THREE.Face3(11,5,1),
        new THREE.Face3(1,7,11),
        new THREE.Face3(1,3,9),
        new THREE.Face3(9,7,1),
        /*inside edges*/
        new THREE.Face3(10,8,9),
        new THREE.Face3(9,11,10),
        new THREE.Face3(8,6,7),
        new THREE.Face3(7,9,8),
        new THREE.Face3(6,10,11),
        new THREE.Face3(11,7,6)
    );
    trussGeometry.computeFaceNormals();
    trussGeometry.computeVertexNormals();
    return trussGeometry;
}


function generateDefaultTrussGeometry(truss) {
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
