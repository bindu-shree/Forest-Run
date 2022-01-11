var canvas;
var backgroundImage;
var  gameState;
var form, player, game;
var steve,steveImage,steveImg;
var bg,index;
var enemy,enemyImage,enemyGroup;
var score=0;
//BP
function preload() {
  backgroundImage = loadImage("assets/bg1.jpg");
  steveImg=loadImage("assets/m2.png");
  steveImage=loadAnimation("assets/m1.png","assets/m2.png","assets/m3.png","assets/m4.png");
  steveImage.frameDelay=20; 
  enemyImage=loadImage("assets/enemy.png");
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2,height/2,width,height);
  bg.addImage(backgroundImage);
  bg.scale=2;
 enemyGroup = new Group ();
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
enemies();
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
textSize(35);
fill ("white");
text ("Score: "+score,width-200,100);
}

function enemies() {
  //write code here to spawn the clouds
  if (frameCount % 600 === 0) {
   enemy = createSprite(random(width-300,width-100),height-200,40,10);
    
    enemy.addImage(enemyImage);
    enemy.scale = 0.5;
    enemy.velocityX = -3;
    
     //assign lifetime to the variable
    enemy.lifetime = 100;
    
    //adjust the depth
  
    
    //add each cloud to the group
    enemyGroup.add(enemy);
  }
  
}
