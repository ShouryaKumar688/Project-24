class paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
    }
    display(){
        push();
        this.body.position = pos
        circle(pos.x,pos.y,this.body.radius)
        pop();
    }
}