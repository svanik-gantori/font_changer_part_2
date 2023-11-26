function setup()
{
    
    video=createCapture(VIDEO);
    video.size(500,450);

    canvas=createCanvas(500,500);
    canvas.position(510,100)

    poseNet=ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background(200,150,190);
}

function ModelLoaded()
{
    console.log("Pose net is initialized!");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }

}