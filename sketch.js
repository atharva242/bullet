var wall,thickness;
var bullet, speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(23,21);
  weight=random(30,52);
  thickness = random(22,88);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  

}

function draw() {
  background("white");  

bullet.collide(wall);

if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.7*width*speed*speed/(thickness*thickness*thickness);


  if(damage>50){
    wall.shapeColor =color ("red") ;
  }
  if(damage<50){
    wall.shapeColor = color("green");
  }
}
  drawSprites();

 
}
function hascollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  {
    return false;
  }

}