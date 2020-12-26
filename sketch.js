var ground;
var monkey , monkey_running;
var banana,bananagroup ,bananaImage, rock, obstacleImage;
var rockGroup;
var score;
var roundd;
var score = 0;

function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,400);
  monkey =  createSprite(100,345,10,10)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.15

  ground=createSprite(300,395,900,13);
    
  bananagroup=createGroup();
  rockGroup = createGroup();
 

  

}


function draw() {
  background("green");
  
  monkey.collide(ground);
  
  if(keyDown("space")&&monkey.y>342){
    monkey.velocityY=-20;
  }
   
  monkey.velocityY=monkey.velocityY+1;
  
  
  spawnbanana();
  spawnrock();
  
  if(monkey.isTouching(bananagroup)){
    bananagroup.destroyEach();
  }
  
  
  stroke("black");
  textSize(20);
  fill("white");
  score = score + Math.round(getFrameRate()/60)
  text("Survival Time: "+score,245,30)
  
  
  drawSprites();
}

function spawnbanana(){
  if(frameCount%140  ===0){
    banana = createSprite(605, 300,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-6; 
    banana.lifetime=125;
    roundd=Math.round(random(100,300))
    banana.y=roundd;
    bananagroup.add(banana);
    
  }
  
}


function spawnrock(){
  if(frameCount%200===0){
    rock = createSprite(610, 355  ,10,10);
    rock.addImage(obstaceImage);
    rock.scale=0.25;
    rock.velocityX=-7; 
    rock.lifetime=115;
    rockGroup.add(rock);
    
  }
}
