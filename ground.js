class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show(){
    var pos = this.body.position;
    Matter.Body.rotate(this.body, angle);

    rotate(angle);
    rect(0, 0, this.w, this.h);
    angle += 0.3;
    pop();
    

  }


 
   
}
