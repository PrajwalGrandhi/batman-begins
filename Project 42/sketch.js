const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var batman;
var ground;
var drops=[];
var MaxDrops = 100;
var thunder;
var thun1,thun2,thun3,thun4;
function preload(){
    thun1 = loadImage("1.png");
    thun2 = loadImage("2.png");
    thun3 = loadImage("3.png");
    thun4 = loadImage("4.png");
}

function setup(){
   createCanvas(400,550);

   engine = Engine.create();
   world = engine.world;
   
    batman = new Umbrella(200,420,300,300);

    for (var j= 0;j<MaxDrops;j++) 
    {
    
       drops.push(new Drop(random(0,400),random(0,200)));
    }

    ground = createSprite(200,550,500,20);
    //ground.color=rgb(50, 48, 20);
     
    thunder = createSprite(200,100,100,200);
    thunder.addImage(thun3);
    thunder.scale=0.3;
    
}
function draw(){
    background("black");
    batman.display();
   
    if(frameCount%20==0){
    var rand = Math.round(random(1,4));
    //console.log(rand);
    switch(rand) {
      case 1: thunder.addImage(thun1);
      thunder.scale=0.3;
              break;
      case 2: 
      thunder.addImage(thun2);
      thunder.scale=0.3;
              break;
      case 3: 
      thunder.addImage(thun3);
      thunder.scale=0.3;
              break;
      case 4: 
      
      thunder.addImage(thun4);
      thunder.scale=0.3;
              break;
      default: break;
    
}
    }
  
    for (var i = 0; i < drops.length; i++) {
     
        drops[i].display();
      }
      
    Engine.update(engine);
    drawSprites();
}   

