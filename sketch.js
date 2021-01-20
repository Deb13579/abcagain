const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy, boyimg
function preload()
{
	boyimg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
boy = createSprite(200,590,20,20)
boy.addImage(boyimg)
boy.scale = 0.1  
stone = new Stone(140,520, 20)
tree = new Tree(500,425, 20, 20)
mango1 = new Mango(450,300,20,20)
	ground = new Ground(400,height,800,100)
	fake = new Ground(140,590,20,60)
	World.add(world, ground)

slingShot = new Chain(stone.body,{x:140, y:520})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.run(engine);
 drawSprites();
  
  ground.display()
  stone.display()
  tree.display()
 mango1.display() 
fake.display()
  slingShot.display()


  
}
function mouseDragged(){
   if(Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY}))
   {
Matter.Body.setStatic(stone.body,false)
   }
	
}

function mouseReleased(){
    slingShot.fly()
}



