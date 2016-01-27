var xRotInitial = 0;
var yRotInitial = 270;
var zRotInitial = 0;

var xRotAdjust = 0;
var yRotAdjust = 1;
var zRotAdjust = 0;

var rotationLag = 20; // higher numbers rotate object slower.


show_viewer(xRotInitial, yRotInitial, zRotInitial);

function show_viewer(xRotIn, yRotIn, zRotIn) {

    var cvs = document.getElementById('object_canvas');
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    var viewer = new JSC3D.Viewer(cvs);

    viewer.setParameter('SceneUrl', 'object/first_carroll_logo.obj');
    viewer.setParameter('InitRotationX', xRotIn);
    viewer.setParameter('InitRotationY', yRotIn);
    viewer.setParameter('InitRotationZ', zRotIn);
    viewer.setParameter('ModelColor', '#595959');
    viewer.setParameter('BackgroundColor1', '#ff944d');
    viewer.setParameter('BackgroundColor2', '#002db3');
    viewer.setParameter('RenderMode', 'textureflat');

    viewer.enableDefaultInputHandler(false);
    viewer.init();
    setInterval(function() {
        viewer.rotate(xRotAdjust, yRotAdjust, zRotAdjust);
        viewer.update();
    }, rotationLag);
}

function initElement() {
    var clickable_element = document.getElementById("object_canvas");
    clickable_element.onclick = move_to_proposal;
}

function move_to_proposal() {
    window.location.href = "pgs/proposal_synopsis.html";
}
