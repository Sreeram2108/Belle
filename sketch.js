function preload(){
  playerimg=loadImage('Belle.png')
}

function setup() {
  createCanvas(800,550);
  player= createSprite(100, 500, 50, 50);
  player.addImage(playerimg)
  player.scale=0.3
  edges=createEdgeSprites()
  ob1=createSprite(250,500,70,20)
  ob2=createSprite(350,400,70,20)
  ob3=createSprite(550,300,70,20)
  ob4=createSprite(150,300,70,20)
  ob5=createSprite(400,200,70,20)
  ob6=createSprite(550,100,70,20)
  ob7=createSprite(650,500,70,20)
  ob8=createSprite(250,100,70,20)
}

function draw() {
  background(0);
  player.collide(edges)

  drawSprites();
}