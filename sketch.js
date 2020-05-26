var thickness,wall;
var speed,weight,bullet;
function setup() {
  createCanvas(800,400);
 wall = createSprite(1200, 200, thickness, height/2);
 speed = random(223,321);
 weight=random(30,52);
 thickness = random(22,83);
 car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if(hasCollied(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
if(damage > 10){
  car.shapeColor = "red";
}
if(damage<10){
car.shapeColor = "green";
}

    
  drawSprites();
}

function hasCollided(bullet, wall){
{
   bulletRightEdge=bullet.x =bullet.width;
   wallLeftEdge = wall.x;
   if(bulletRightEdge>=wallLeftEdge){
    return true;
   }
   return false;
}
}