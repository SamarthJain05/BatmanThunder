class Drop{
    constructor(x,y){
        this.radiusX = random(10,20)
        this.radiusY = random(5,10)
        this.x = x
        this.y = y
        this.image = loadImage("drop.png");
    }

    display(){
        /* fill("blue");
        ellipse(this.x, this.y, this.radiusX,this.radiusY) */

        imageMode(CENTER)
        image(this.image, this.x,this.y,this.radiusX,this.radiusX)
    }

    fall(){
        this.y = this.y + random(5,10)
        if(this.y >height){
            this.y = 0;
        }
    }
}