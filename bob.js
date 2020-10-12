class Bob{
    constructor(x,y,radius){
        var bob_options = {
           'restitution':0.3,
           'friction':0.5,
           'density':1
        }
        this.body = Bodies.circle(x,y,radius,bob_options);
        this.radius = radius;
        World.add(world,this.body);
        

    }
    display(){
        var pos = this.body.position;
         push();
         translate(pos.x,pos.y);
         ellipseMode(RADIUS);
        fill("pink");
         ellipse(0,0,this.radius);
         pop();
 
    }
}
