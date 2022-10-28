noseX = 0;
noesY = 0;
leftW = 0;
rightW = 0;
diff = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);


     canvas = createCanvas(550, 500);
     canvas.position(560,150);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('posen]Net Is initialized!');
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX =results[0].pose.nose.x;
        noesY =results[0].pose.nose.y;
        console.log('noesX= ' +noseX+'noesY= '+noesY);
        leftW = results[0].pose.leftWrist.x;
        rightW = results[0].pose.rightWrist.x;
        diff = floor(leftW - rightW);
    }
}
function draw(){
    background('#969A97');

    document.getElementById('square_side').innerHTML = "width and height of a square will be ="+ diff+" px"
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noesY,diff);
}

