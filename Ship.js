 var sea, seaImage
 var ship, ship_sailing, ship_up, ship_down

function preload(){
 ship_sailing = loadAnimation("ship-1.png" ,"ship-2.png", "ship-3.png", "ship-4.png"), 
 seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,400);
  sea = createSprite(50, 200, 2000,30)
  sea.addImage("sea", seaImage)
  sea.velocityX = -4
  sea.scale = 0.4
  sea.x = sea.width/8
  console.log(sea.x)
  ship = createSprite(200, 210, 20, 50)
  ship.addAnimation("sailing", ship_sailing)
  ship.scale = 0.2
 


  
}

function draw() {
  background( "blue")

  if(keyWentDown("down")){
    ship.velocityY=4
  }
  if(keyWentUp("down")){
    ship.velocityY=0
  }
  
  if(keyWentDown("up")){
    ship.velocityY= -4
  }
  if(keyWentUp("up")){
    ship.velocityY=0
  }
  if(sea.x < 0){
   sea.x = sea.width/8
 }

 drawSprites()
}