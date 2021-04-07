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
     
        // PREGAME HOVER ANIMATION
        this.y = this.y + this.yspeed;
        if (this.y >= 260) {this.y = this.y - this.yspeed;}
        if (this.y <= 240) {this.y = this.y + this.yspeed;}
        
    
        // GRAVITY
        if (game.isPreGame === false) {
        this.velocity += this.gravity;
        this.y += this.velocity;
        }

        // CONSTRAIN FLOOR  
        if (this.y >= height - this.height -70) {
            this.y = height - this.height -70;
            game.isGameOver = true;
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
        this.velocity = - 11;
    }
}