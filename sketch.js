var jaxon;
var jaxon_run;
var edges;
var road;
var road_pic;

function preload(){
  jaxon_run = loadAnimation("Runner-1.png", "Runner2.png");
  road_pic = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  road = createSprite(200, 180, 400, 20);
  road = addImage(road_pic);
  road.velocityY = -5
  road.y = road.length/2

  jaxon = createSprite(100, 100, 20, 20);
  jaxon.addAnimation("running", jaxon_run);
  edges = createEdgeSprites()

  jaxon.scale = 0.25
  
}

function draw() {

  jaxon.x = World.mouseX


    jaxon.collide(edges)

  drawSprites()
}
