var video;
function setup(){
    var canvas = createCanvas(700, 500);
    background(127);
    canvas.parent('sketchcanvas');
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.hide();
}

function draw(){
    
    push();
    translate(width,0);
    scale(-1, 1);
    image(video,0,0,width,height);
    pop();
 
}