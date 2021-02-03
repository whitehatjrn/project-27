var roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
var startbobposx,startbobposy;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1600, 700);

    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/4,300,30);
	
	startbobposx=width/2;
	startbobposy=height/4+500;
	
	bobDiameter=40;
	bobObject1 = new Bob(startbobposx-bobDiameter*2,startbobposy,bobDiameter);
	bobObject2 = new Bob(startbobposx-bobDiameter,startbobposy,bobDiameter);
	bobObject3 = new Bob(startbobposx,startbobposy,bobDiameter);
	bobObject4 = new Bob(startbobposx+bobDiameter,startbobposy,bobDiameter);
	bobObject5 = new Bob(startbobposx+bobDiameter*2,startbobposy,bobDiameter);
	 
	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3=new Rope(bobObject3.body,roof.body,0,0);
	rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  //Engine.update(engine);
  
  roof.display(); 
  rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

bobObject1.display();
// bobObject2.display();
// bobObject3.display();
// bobObject4.display();
// bobObject5.display();


//Teachers code

}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-10,y:-5});

	}
}