class Player {

    constructor() {
        this.score = 0;
        this.highscore = 0;
        this.gravity = 0.4;
        this.velocity = 5;
        this.width = 45;
        this.height = 33;
        this.x = 160 ;
        this.y = height/5;
    }

    draw() {
        // gravity
        this.velocity += this.gravity;
        this.y += this.velocity;

        // constrain bottom
        if (this.y >= height - this.height -70) {
            this.y = height - this.height -70;
        }
        // draw image
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }

    jump() {
        // controls jump height
        this.velocity = - 7  ;
    }
}