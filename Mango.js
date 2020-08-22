class Mango{
    constructor(x,y,r){
        var options={
            restitution:1,
            friction:1.2,
            density:0.6
        }
        
        this.mango=Bodies.circle(x,y,r)
        World.add(world,this.mango);
        this.image=loadImage("MANGO.png")
    }
    display(){
        var mangopos=this.mango.position
        var angle=this.mango.angle
        push()
        translate(mangopos.x,mangopos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0,0, 20,20)
        pop()
    }
}