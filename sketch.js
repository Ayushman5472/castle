const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,square1, rect1,rect2

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //square1 = Bodies.rectangle(400,380,70,70);
  //rect1 = Bodies.rectangle(250,380,40,80);
  //rect2 = Bodies.rectangle(550,380,40,80);
  
  var options={
    isStatic:true
  }
  ground = Bodies.rectangle(400,370,800,20,options);
World.add(world,ground)
/*World.add(world,square1)
World.add(world,rect1)
World.add(world,rect2)
*/}

function draw() {
  background(123);
  Engine.update(engine);
rectMode(CENTER)
rect(400,350,70,70);
rect(340,350,40,80);
triangle(320,310,360,210,360,310)
triangle(480,310,440,210,440,310)
rect(460,350,40,80);
rect(400,295,40,40);
rect(400,268,10,10);
}        