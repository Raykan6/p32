class bottomone {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
  push();
      console.log(this.body.speed);
      
      if(this.body.speed<3){ 
        var pos =this.body.position;
        var angle=this.body.angle;
   
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate (angle);
   fill("skyblue");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
 
  }
  else{
    World .remove(world,this.body);
    push ();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    rect ( 1201, 401, 0, 0);
    pop ();
  }
    }
  
    score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
      score++
      
      }
      
      
      }
};
