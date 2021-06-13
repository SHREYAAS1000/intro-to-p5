function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,150);  
    video = createCapture(VIDEO); // used to access the camera in p5.js libray
    video.hide(); 

    
}



function draw()
{
    image(video,230,150,220,200);
    
    fill(255,0,0);
    stroke(225,0,0);
    circle(50,50,80);

    fill(228,0,0);
    stroke(0,128,0);
    rect(50,40,460,20);

    rect(90,420,460,20)

    fill(255,0,0);
    stroke(225,0,0);
    circle(50,50,80);

    fill(228,0,0);
    stroke(0,128,0);
    rect(50,40,460,20);

    rect(90,420,460,20)
}

function take_snapshot()
{
    save("my selfie.png");
}

