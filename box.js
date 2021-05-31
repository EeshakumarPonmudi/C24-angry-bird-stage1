class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    //pushing a new setting to the object
    push();
    translate(pos.x, pos.y)
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    strokeWeight(3);
    stroke("red");
    rect(0,0, this.width, this.height);
    pop();
    //reverting back to the old setting
  }
};
