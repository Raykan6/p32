const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground1,ground2;
var block1,block2,block3,block4,block5;
var block6,block7,block8;
var block9;
var block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24;
var block25;
var polygon1;
var slingShot1;
var backgroundImg;
var score=0;

function preload() {
  backgroundImg = loadImage("sprites/day.jpg");
  getBackgroundImage();
}

function setup(){
 
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    var bg;
    polygon1=new polygon(50,100,20);
    
    ground = new Ground(390,300,210,10);
    ground1 = new Ground(800,200,195,10);
    ground2 = new Ground(601,390,1200,30);
 
    block1=new block(330,235,30,40);
    block2=new block(360,235,30,40);
    block3=new block(390,235,30,40);
    block4=new block(420,235,30,40);
    block5=new block(450,235,30,40);

    block6=new green(360,180,30,40);
    block7=new green(390,180,30,40);
    block8=new green(420,180,30,40);

    block9 = new topnew(390,155,30,40);

    block10=new bottomone(313,275,25,40);
    block11=new bottomone(338,275,25,40);
    block12=new bottomone(363,275,25,40);
    block13=new bottomone(388,275,25,40);
    block14=new bottomone(413,275,25,40);
    block15=new bottomone(438,275,25,40);
    block16=new bottomone(462,275,26,40);

    block17=new bottomone(750,175,25,40);
    block18=new bottomone(775,175,25,40);
    block19=new bottomone(800,175,25,40);
    block20=new bottomone(825,175,25,40);
    block21=new bottomone(850,175,25,40);

    block22=new green(775,135,25,40);
    block23=new green(800,135,25,40);
    block24=new green(825,135,25,40);
  
    block25=new block(800,95,30,40);

    slingShot1 = new SlingShot(polygon1.body,{x:50,y:100});
}

function draw() {
  if(backgroundImg)
  background(backgroundImg); 
  textSize(35);
  fill ("white");
  text ("Score:"+ score,750,40);
  Engine.update(engine);
  polygon1.display();
  ground.display(); 
  ground1.display(); 
  ground2.display();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  block25.display();
  block25.score();
  slingShot.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot1.fly();
}
function keyPressed(){
  if(keyCode===32){
     slingShot1.attach(this.polygon);
  }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
  var responsejson = await response.json();
  var datetime = responsejson.datetime
  var hour = datetime.slice(11,13);
if (hour>=06 && hour<=19){
  
  bg="sprites/day.jpg"

  
}
else{

bg ="sprites/night.jpg"

}
backgroundImg = loadImage(bg);

}
