class Obstacle {

    constructor(image1, image2) {
        this.pipeTop = image1;        
        this.pipeBottom = image2;
        this.pipeWidth = 80;
        this.pipeHeight = 320;        
        this.x = width;
        this.y = Math.floor(Math.random()*250);
        
    }

    collision(playerInfo) {

        const pipeX = this.x;
        const pipeY = this.y + 200  ;

        const birdX = playerInfo.x + playerInfo.width / 2;
        const birdY = playerInfo.y + playerInfo.height / 2;

        let d = dist(pipeX, pipeY, birdX, birdY)

        push();
        translate((pipeX + birdX) / 2, (pipeY + birdY) / 2);
        rotate(atan2(birdY - pipeY, birdX - pipeX));
        text(nfc(d, 1), 0, -5);
        pop();

        if (birdX > pipeX && birdY > pipeY) { 
             
            console.log('collision')
            console.log("birdX " + birdX) 
            console.log('pipeX '+ pipeX)
            console.log('birdY ' + birdY)            
            console.log('pipeY ' + pipeY)
            noLoop();
        }  

        // if (dist(pipeX, pipeY, birdX, birdY) > 80) {            
        //     return false;               
        // } else {
        //     console.log('collision')
        //     return true; 
        // }
    }

    draw() {

        // pipe speed
        this.x -= 2; 

        //the top pipe y position should be random between -250 and 0
        image(this.pipeTop, this.x, this.y - 250, this.pipeWidth, this.pipeHeight)
        //the bottom pipe y position should be random between 200 and 450 
        image(this.pipeBottom, this.x, this.y + 200, this.pipeWidth, this.pipeHeight)
             
        // console.log(this.birdX)
    }

    
}     