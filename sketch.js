const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango,treeIMG,manSprite
var manIMG,treeSprite,ground
var mango1, mango2,mango3,mango4,mango5;
var chain1, chain2, chain3, chain4, chain5;

function preload(){
  treeIMG=loadImage("TREE.png")
  manImg=loadImage("manne.png")
}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

   //treeSprite=createSprite(1000,200,40,40)
   //treeSprite.addImage(treeIMG)

   //manSprite=createSprite(160,400,20,20)
   //manSprite.addImage(manIMG)

    ground=new Ground(600,height,1200,20)



    mango1=new Mango(500,200,20)
    mango2=new Mango(700,200,20)
    mango3=new Mango(900,200,20)
    mango4=new Mango(1000,150,20)
    mango5=new Mango(1100,250,20)

    
   chain1=new Chain(mango1.body,{x:500,y:200})
    //chain2=new Chain(mango2.body,{x:900,y:200})
    //chain3=new Chain(mango3.body,{x:1110,y:200})
   // chain4=new Chain(mango4.body,{x:1010,y:155})
    //chain5=new Chain(mango5.body,{x:1010,y:255})

   
 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
 chain1.display()
  //chain2.display()
  //chain3.display()
  //chain4.display()
  //chain5.display()
  drawSprites()
}






 
