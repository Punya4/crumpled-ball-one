class Paper{

  constructor(x,y,w,h){
    
    var option = {
            isStatic:false,
            restitution:0.7,
            density:1.2,
            friction=0.5,
            
      

            
    }

    this.body = Bodies.circle(x,y,radius,option);
    World.add(world,this.body);
    this.radius=radius;
  }



  display(){
   push();
   translate(this.body.position.x,this.body.position.y);
   rotate(this.body.angle);
    fill("purple")
    stroke("purple")
    circleMode(CENTER);
    circle(0,0,this.radius);
    
   pop();
  }


}
