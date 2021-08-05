class polygon {
    constructor(x, y, r) {
      var options = {
        isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:2.0
      }
      
      this.x=50;
      this.y=100;
      this.r=20;
          
this.body = Bodies.circle(50,100,20,options);

      World.add(world, this.body);
    }
    display(){
     
      var polygonpos =this.body.position;
      push();
     
      translate(polygonpos.x, polygonpos.y);
    
      fill("yellow");
      rectMode(CENTER );
      rect(polygonpos.x,polygonpos.y,this.r,this.r); 
    
      pop();
    }
  };
  
      
    
    