class Obstacle {

    constructor(image1, image2) {
        this.pipeTopImg = image1;        
        this.pipeBottomImg = image2;

        this.pipeWidth = 80;
        this.pipeHeight = 320;        
        this.x = width;
        this.y = Math.floor(Math.random()*250);
        this.pipeBottom = this.y + this.pipeHeight;
        this.pipeTop = this.y;
    }

    draw() {

        // pipe speed
        this.x -= 2; 

        //the top pipe y position should be random between -250 and 0
        image(this.pipeTopImg, this.x, this.y -250, this.pipeWidth, this.pipeHeight)
        //the bottom pipe y position should be random between 200 and 450 
        image(this.pipeBottomImg, this.x, this.y +200, this.pipeWidth, this.pipeHeight)
             
        // console.log(this.birdX)

        


    }

    collision(playerInfo) {

        // const pipeX = this.x + this.pipeWidth / 2;
        // const pipeY = this.y + 200 + this.pipeHeight / 2 ;

        // const birdX = playerInfo.x + playerInfo.width / 2;
        // const birdY = playerInfo.y + playerInfo.height / 2;

        // barrier
        // BIRD
        let birdLeft = playerInfo.x;
        let birdRight = playerInfo.x + playerInfo.width;
        let birdTop = playerInfo.y;
        let birdBottom = playerInfo.y + playerInfo.height;
        // TOP PIPE
        let pipe1Left = this.x; 
        let pipe1Right = this.x + this.pipeWidth; 
        let pipe1Top = this.y -250;
        let pipe1Bottom = this.y + this.pipeHeight -250;
        // BOTTOM PIPE
        let pipe2Left = this.x; 
        let pipe2Right = this.x + this.pipeWidth; 
        let pipe2Top = this.y + 200;
        let pipe2Bottom = this.y + this.pipeHeight +200;
          
        
        if (birdRight > pipe1Left && birdLeft < pipe1Right && birdTop < pipe1Bottom && birdBottom > pipe1Top) {
            console.log('collision') 
            noLoop()
        }
        
        if (birdRight > pipe2Left && birdLeft < pipe2Right && birdTop < pipe2Bottom && birdBottom > pipe2Top) {
            console.log('collision') 
            noLoop()
        }
        // if (birdX > pipeX + this.pipeWidth && birdX < pipeX + this.pipeWidth && birdY > pipeY - this.pipeHeight && birdY < pipeY + this.pipeHeight){
            
        //     console.log('collision')
        //     noLoop();
        // } 

        // if (birdRight > pipeX && playerInfo.x < this.pipeWidth + pipeX){
        //     console.log('colisson')
        //     noLoop()
        // }

        // console.log("player ", playerInfo.x)
        // console.log("pepe", pipeX)

        // if (birdX > pipe2X - this.pipeWidth && birdX < pipe2X + this.pipeWidth && birdY > pipe2Y - this.pipeHeight && birdY < pipe2Y + this.pipeHeight){
        //     console.log('collision')
        // }  
        // let d = dist(birdTop, pipeTop, birdBottom, pipeBottom)

        // push();
        // translate((pipeX + birdX) / 2, (pipeY + birdY) / 2);
        // rotate(atan2(birdY - pipeY, birdX - pipeX));
        // text(nfc(d, 1), 0, -5);
        // pop();

        // if (birdX > pipeX && birdY > pipeY) { 
             
        //     console.log('collision')
        //     console.log("birdX " + birdX) 
        //     console.log('pipeX '+ pipeX)
        //     console.log('birdY ' + birdY)            
        //     console.log('pipeY ' + pipeY)
        //     noLoop();
        // }  

        //  
    }

    

    
}     