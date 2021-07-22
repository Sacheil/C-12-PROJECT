
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  RunnerImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;
 Runner=createSprite(200,350);
 Runner.addAnimation("Running",RunnerImg);
 Runner.scale=0.05
 invisibleBoundary1=createSprite(0,200,20,400)
 invisibleBoundary1.visible=false;
 invisibleBoundary2=createSprite(400,200,10,400)
 invisibleBoundary2.visible=false;
}

function draw() {
  
  Runner.x=World.mouseX;
  background("black");
if(path.y>400){
  path.y=height/2;
  
}


Runner.collide(invisibleBoundary1);
Runner.collide(invisibleBoundary2);
drawSprites();
}
