var particles=[];
var plinkos=[];
var divisions=[]

var divisionHeight=300; 

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
}

function draw() {
  background(255,255,255);  

  
  drawSprites();
}