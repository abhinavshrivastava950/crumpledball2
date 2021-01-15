
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1, ground1;
var dustbin1, dustbin2, dustbin3;
var dustbinimg;

function preload()
{
	dustbinimg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,180,20);
	ground1 = new Ground(400, 630, 800, 20);
	dustbin1 = new Dustbin(650, 610, 100, 20);
	dustbin2 = new Dustbin(590, 570, 20, 100);
	dustbin3 = new Dustbin(710, 570, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  paper1.display();
  ground1.display();
  image(dustbinimg,620,470,150,150)
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  
  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:58,y:-58});
	}
}



