class Plinko {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      
    }
    display(){
      this.body=Bodies.circle(x,y,this.r,options);
      this.color(random(0,225),random(0,225),random(0,225));
      World.add(world,this.body);
    }
  };
