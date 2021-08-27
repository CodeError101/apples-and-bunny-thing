var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
 
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function appleSpawn(){
  if (frameCount % 10 === 0) {
    apple = createSprite(200,400);
    apple.addImage(appleImg);
    apple.scale = 0.1
    //apple.x//Math.round(random(10,60))
    apple.velocityY = 3;
    
    
    //assigning lifetime to the variable
   apple.lifetime = 250

}
}


function draw(){
 
  appleSpawn  
   background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  drawSprites();

}