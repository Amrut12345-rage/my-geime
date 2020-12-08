class Steve {
  constructor(x,y,width,height){
    this.image=loadImage('1 animation.png')
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;

    this.height = height;
  
    World.add(world, this.body);
  }
  display(){
   
    push();
    translate(this.body.position.x, this.body.position.y);
    
    
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}
   
  