class Player {

    constructor() {
        this.score = 0;
        this.highscore = 0;
        this.gravity = 0.6;
        this.velocity = 5;
        this.width = 45;
        this.height = 33;
        this.x = 160;
        this.y = 250;
        this.yspeed = 1;
    }

    draw() {
        // this.y--;
        // // PREGAME HOVER ANIMATION    
        // if (this.y >= 260) {this.y --}
        // if (this.y <= 220) {this.y ++}
        
    
        // GRAVITY
        if (game.isPreGame === false) {
        this.velocity += this.gravity;
        this.y += this.velocity;
        }

        // CONSTRAIN FLOOR  
        if (this.y >= height - this.height -70) {
            this.y = height - this.height -70;
            game.isGameOver = true;
            sfxOuch.play(); 
            musicLoop.stop()    
        }

        // CONSTRAIN CEILING 
        if (this.y <= 0 - this.height) {
            this.y = 0  - this.height;
        }

        // DRAW PLAYER
        image(game.playerImage, this.x, this.y, this.width, this.height);

    }


    jump() {
        //  CONTROL JUMP HEIGHT
        if (game.isGameOver !== true) {
        this.velocity = - 10;
        sfxJump.play();
        }
    }
}