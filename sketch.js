
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1= new Paper(200,200,20)
  ground= new Ground(400,380,800,10)
  dustbin1= new Dustbin(500,370,100,20)
  dustbin2= new Dustbin(545,325,20,100)
  dustbin3= new Dustbin(455,325,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //keyPressed();
  
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed() {

	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:1,y:-4});
	}
}
























































































































































































































































//hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
