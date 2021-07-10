const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ball2;
var con;
var con2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var  ball_option = {
   restitution = 0.95,
  }

  var ball2_option = {
    restitution = 0.90,
  }
 
 ball = Bodies.circle(100,200,100,20,ball_option)
  World.add(world,ball);

  ball2 = Bodies.circle(200,450,300,20,ball2_option)
   World.add(world,ball2);

     con = Matter.Constraint.create({
     pointA:{x:200,y:20},
     bodyB: ball,
     pointB:{x:0,y:0},
     length: 100 ,
     stiffness: 0.1

     })

   World.add(world , con);


   con2 = Matter.Constraint.create({
   pointA: {x:0,y:0},
   bodyB: ball,
   pointB: {x:0,y:0} ,
   length: 100 ,
   stiffness: 0.1

   })
     
   World.add(world , con2)


  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 ellipse(ball2.position.x,ball2.position.y,30);


push();
strokeWeight(2)
stroke(255);
line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
line(ball.position.x , ball.position.y , ball2.position.x , ball2.position.y)
pop()

keyPressed();
drawSprites();

}

function keyPressed()

{

if(keycode===RIGHT_ARROW)
{

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}

}