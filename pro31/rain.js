class rain {
    constructor(x, y, radius, angle) {
      var options = { 
        isStatic:true,
        density: 1, 
        friction:0.1};
  
      this.body = Bodies.circle(x, y, radius,  options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      var maxDrops = 100
      for(var i = 0; i<maxDrops; i++){
      Rain.push(new createRain(random(0,400),random(0,400)))
      }
      if(this.rain.position.y>height){
        Matter .Body.setPosition(this.rain,{x:random(0,400),y:(0,400)})


      }
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("brown");
      ellipseMode (RADIUS)
      ellipse(0, 0, this.radius);
      pop();
    }
  }