var canvas;
var backgroundImage;
var  gameState;
var form, player, game;
var steve,steveImage,steveImg;
var bg,index;
//BP
function preload() {
  backgroundImage = loadImage("assets/bg1.jpg");
  steveImg=loadImage("assets/m2.png");
  steveImage=loadAnimation("assets/m1.png","assets/m2.png","assets/m3.png","assets/m4.png");
  steveImage.frameDelay=20; 
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2,height/2,width,height);
  bg.addImage(backgroundImage);
  bg.scale=2;
 
  game = new Game();
 
  game.start();

steve=createSprite(width-1100,height-200,50,50);
steve.addImage(steveImg);
steve.addAnimation("running",steveImage);
}
function draw(){
  background(0);

camera .position.x=steve.position.x+400;
if(gameState==="play"){
game.play();
}
  
  if(keyDown("w")){
    steve.position.y-=1;
    steve.changeAnimation("running",steveImage);
  }
  if(keyDown("s")){
    steve.position.y+=1;
    steve.changeAnimation("running",steveImage);
  }
  drawSprites();
}