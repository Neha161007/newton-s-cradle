const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);

	ball = Bodies.circle(100,200,20);
  World.add(world,ball);
  ball1 = Bodies.circle(160,200,20);
  World.add(world,ball);
  ball2 = Bodies.circle(210,200,20);
  World.add(world,ball);
  ball3 = Bodies.circle(270,200,20);
  World.add(world,ball);
  ball4 = Bodies.circle(320,200,20);
  World.add(world,ball);
  ball5 = Bodies.circle(380,200,20);
  World.add(world,ball);


	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
