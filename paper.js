class Paper
{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,r, options)
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        this.x=x
        this.y=y
        this.r=r
    }

    display()

    {
        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        fill("gray")
        imageMode(CENTER)
        image(this.image, 0,0,2*this.r, 2*this.r)
        pop()
    }
}