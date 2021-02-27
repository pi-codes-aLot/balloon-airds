var bgImg;
var hab, habImg;
var xRef, yRef
function preload(){
   bgImg = loadImage("images/HAB1.png")
  
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hab = createSprite(400, 200);
  hab.addAnimation("images/HAB2.png", "images/HAB3.png", "images/HAB4.png")
  hab.scale = 0.4;

}

function draw() {
  background(bgImg);  
  database = firebase.database()
  
  if(keyDown(UP_ARROW)){
    hab.y -= 2.5;
    yRef = database.ref('/').update({
      y: hab.y
    });
    /*if (hab.scale > 0.2){
      hab.scale -= 0.02
    
    }*/
   
  }
  if(keyDown(DOWN_ARROW)){
    hab.y += 2.5;
    yRef = database.ref('/').update({
      y: hab.y
    });
    /*if (hab.scale < 0.2){
      hab.scale += 0.02
    }*/
   
  }
  if(keyDown(RIGHT_ARROW)){
    xRef = database.ref('/').update({
      x: hab.x
    });
    hab.x += 2.5;
  }
  if(keyDown(LEFT_ARROW)){
    xRef = database.ref('/').update({
      x: hab.x
    });
    hab.x -= 2.5;
  }

  drawSprites();
}

