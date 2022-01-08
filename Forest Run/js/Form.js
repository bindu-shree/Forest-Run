class Form {
  constructor() {
 
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    
  }

  setElementsPosition() {
    this.titleImg.position(380, 160);
   
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");

    this.playButton.class("customButton");
    
  }

  //BP
  hide() {
    this.titleImg.hide();
    this.playButton.hide();
   
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.playButton.hide();
      this.titleImg.hide();
     
     gameState="play";
      
     //player.getDistance(); //aa
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
