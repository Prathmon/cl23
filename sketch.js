const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(200, 0, 50, 40);
  box2 = new Box (200, 200, 40, 50);

  ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(0,380,800,20,ground_options);
  World.add(world,ground);
  
  ball_options = {
    restitution : 0.5
  }
  ball = Bodies.circle(100,200,10,ball_options);
  World.add(world,ball);
}

function draw() {
  background("yellow");

  Engine.update(engine);

  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);

  box1.display();
  box2.display();
}