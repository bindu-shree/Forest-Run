class Game {
  constructor() {

  }


  start() {
    player = new Player();
    
    form = new Form();
    form.display();
    

  
  }


  play() {
    

    steve.changeAnimation("running",steveImage);
    bg.velocity.x=-1;
    if(bg.position.x<600){
      bg.position.x=width/2;
    }  
     
    
    
  }

 

}