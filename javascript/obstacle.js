class Obstacle {

    constructor(image1, image2) {
        this.pipeTop = image1;        
        this.pipeBottom = image2;        
        this.x = 0;
        this.y = Math.floor(Math.random()*250);
        
    }

    draw() {
        //the top pipe y position should be random between -250 and 0
        image(this.pipeTop, this.x + width, this.y - 250, 80, 320)
        //the bottom pipe y position should be random between 200 and 450 
        image(this.pipeBottom, this.x + width, this.y + 200, 80, 320)
        
        this.x -= 2;
           
    }
}     