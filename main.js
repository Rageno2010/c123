function setup(){
    canvas = createCanvas(500,500);
    canvas.position(500,150);
    video = createCapture(VIDEO);
    video.size(400,300);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
    }
    function preload(){
    
    }
    function draw(){
    background("cadetblue");
    
    }
    function modelloaded(){
        console.log("posenet is working");
    }
    function gotposes(results){
        if(results.length>0){
            console.log(results);
        }
    }