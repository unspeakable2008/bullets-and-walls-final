var bullet,wallthiskness;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
bullet = createSprite(50,200,10,50);
//bullet.shapeColor("white")

// wall.shapeColor(80,80,80)
speed = random(223,321);
 weight = random(30,52); 
bullet.velocityX = speed;
thickness = random(22,83)
wall = createSprite(1300,200,thickness,height/2);
}
function draw() {
  background(0);  
if (wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX = 0;
  var deformation=0.5*weight *speed* speed/22509;
if(deformation>180)
{
  bullet.shapeColor = color(255,0,0);
 }
if(deformation<100)
{
  bullet.shapeColor = color(0,255,0)
}
}
  
if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed*speed/(thickness *thickness *thickness);
  if (damage>10){
    wall.shapeColor = colour(255,0,0);
  }
  if (damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }
}


drawSprites();
}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}