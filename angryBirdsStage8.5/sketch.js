const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var steve;
var block = [];
var wood=[]; 



function preload() {
    
image=loadImage('download (1).jpeg');
    
//image=loadImage('2 animation).png');
    
//image=loadImage('1 animation.png');

}

function setup(){
    var canvas = createCanvas(1600, 700);
	rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;

//steve= new Steve(50,100,60,60);

   ground= new Ground (800,690,1600,5);
   for( var i=0; i<1600;i=i+60){
    block.push (new Block (i,650));
    
   }
   for( var i=0; i<1600;i=i+60){
    block.push (new Block (i,600));
    
   }
   for( var i=200; i<650;i=i+50){
    wood.push (new Wood (1260,i));
    
  }
  // for( var i=0; i<1600;i=i+60){
    //block.push (new Block (i,500));
    
   //}
  
  

  
}

function draw(){
  
  			background(image);
              for(var j=0;j<block.length;j++){
                block[j].display();
           }
 ground.display();
    //steve.display();
    Engine.update(engine);




function keyPressed(){
   
}
}



