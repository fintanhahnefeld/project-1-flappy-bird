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

        // if (game.isGameOver === false) {
        //     textFont('VT323')
        //     stroke(0,0,0)
        //     strokeWeight(3)
        //     textSize(64);
        //     fill(255,255,255)
        //     let x = text(this.score, width/2 -16 ,120)
        //     x.hide();
        // } 
        
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
            game.gameOver();
        }
        // DRAW PLAYER
        image(game.playerImage, this.x, this.y, this.width, this.height);

    }

    jump() {
        //  CONTROL JUMP HEIGHT
        this.velocity = - 11;
    }
}