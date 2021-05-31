class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      
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
      fill("red");
      strokeWeight(3);
      stroke("yellow");
      rect(0,0, this.width, this.height);
      pop();
      //reverting back to the old setting
    }
  };
  