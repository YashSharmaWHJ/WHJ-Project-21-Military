var thickness,wall;
var bullet,speed,weight;

// creating global variables
function setup() 
{
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,height/2);
  bullet = createSprite(20,200,40,15);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  
}

function draw() 
{
  background("black");  
// adding color
  wall.shapeColor = color(80,80,80)
  bullet.shapeColor = color("white");

  // if statement for collision between bullet and wall
if (hasCollided(bullet,wall))
{
  
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

  if(damage<10){
    wall.shapeColor = color("green");
}

  if(damage>=10){
    wall.shapeColor = color("red");
}


}
 drawSprites();

}
// creating a function which tells if 2 objects have collided
function hasCollided(lbullet,lwall)
{

  var bulletRightEdge = lbullet.x +lbullet.width;
  var wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;

  }
    return false;
}


