function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', modelLoaded);
}



function modelLoaded() {
    if (results.lenght > 0) {
        console.log("Thor")
    }
}


function modelLoaded() {
    console.log("Bring Me Thanos")
}

function preload() {

}

function draw() {

}