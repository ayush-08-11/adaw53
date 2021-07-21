
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var side1,side2,side3;
var paper;
var dust_img;
var paper_img;

function preload(){
  dust_img = loadImage("dustbin.png");
  paper_img = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(width/2,height-50,width,20);
	side1 = new Side(500,580,20,100);
	side2 = new Side(600,630,200,20);
	side3 = new Side(700,580,20,100);
	paper = new Paper(200,500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  paper.display();

  image(dust_img,475,520,250,120);
  image(paper_img,paper.x,paper.y,50,50);

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-85})
	}
}


