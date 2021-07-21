class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.image = loadImage("paper.png");
        this.radius = radius;
        World.add(world, this.body);
        }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        image(paper_img,paper.x,paper.y,50,50);
        fill(255);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius*2);
        pop();
    }
}