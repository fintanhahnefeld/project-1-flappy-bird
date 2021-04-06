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
        
        //the top pipe y position should be random between -250 and 0
        image(this.pipeTopImg, this.x, this.y -250, this.pipeWidth, this.pipeHeight)
        //the bottom pipe y position should be random between 200 and 450 
        image(this.pipeBottomImg, this.x, this.y +200, this.pipeWidth, this.pipeHeight)
         
        // pipe speed
        this.x -= 2.5;

    }

    collision(playerInfo) {

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
          
        // TOP PIPE COLLISION CHECK
        if (birdRight > pipe1Left && birdLeft < pipe1Right && birdTop < pipe1Bottom && birdBottom > pipe1Top) { 
            game.gameOver();
        }
        
        // BOTTOM PIPE COLLISION CHECK
        if (birdRight > pipe2Left && birdLeft < pipe2Right && birdTop < pipe2Bottom && birdBottom > pipe2Top) {
            game.gameOver(); 
        }

        // SCORE COUNTER
        if ( birdLeft ==   pipe1Right) { game.player.score += 1}

        
    } 

    

    
}     