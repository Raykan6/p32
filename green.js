class green {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
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
   fill("lightgreen");
   rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
 
  }
  else{
    World .remove(world,this.body);
    push ();
    this.Visibility=this.Visibility-5;
    tint (255,this.Visibility);
    rect (this.body.position.x=1201,this.body.position.y=401);
    pop ();
  }
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
      score++;
      
      }
    }
};
