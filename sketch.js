
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObj=new roof(width/2,height/4,width/7,20)

	bobDiameter=40;

	startBobPositionX=width/2;
    startBobPositionY=height/4+500;

	bobObj1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

	bobObj2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);

	bobObj3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);

	bobObj4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);

	bobObj5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	rope1=new Rope(bobObj1,roofObj.body)

	rope2=new Rope(bobObj2,roofObj.body)

	rope3=new Rope(bobObj3,roofObj.body)

	rope4=new Rope(bobObj4,roofObj.body)

	rope5=new Rope(bobObj5,roofObj.body)


   option1={
	   bodyA:bobObj1.body,
	   bodyB:roofObj.body,
	   pointB: {x:-bobDiameter*2, y:0}

   }

   option2={
		 bodyA:bobObj2.body,
		 bodyB:roofObj.body,
		 pointB:{x:-bobDiameter, y:0}

   }

   option3={
	  bodyA:bobObj3.body,
	  bodyB:roofObj.body,
	  pointB:{x:0, y:0}

   }

  option4={
	  bodyA:bobObj4.body,
	  bodyB:roofObj.body,
	  pointB:{x:bobDiameter, y:0}	
  }

   option5={
	   bodyA:bobObj5.body,
	   bodyB:roofObj.body,
	   pointB:{x:bobDiameter*2, y:0}
   } 	 

    var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);

	Engine.run(engine)

}


function draw() {
	rectMode(CENTER);
	background(230);
	roofObj.display()
  
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()	
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
}
function keyPressed(){

    if(keyCode===UP_ARROW){

   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

    }
}

function drawLine(constraint){

	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}




