var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  //for creating variablaes
  car = createSprite(50, 200, 50, 50)
  wall = createSprite(1500, 200, 60, height/2)
 
  speed = random(59,90)
  weight = random(400,1500)

  //for giving velocity
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}