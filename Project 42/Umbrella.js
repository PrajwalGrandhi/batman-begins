class Umbrella{
    constructor(x,y,w,h) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,w-150,h-50,options);
      this.w = w; 
      this.h = h;
      this.image=loadImage("walking_1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.w,this.h);
      //rect(pos.x,pos.y,this.w,this.h);
    }
  };