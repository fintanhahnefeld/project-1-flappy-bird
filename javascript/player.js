class Player {

    constructor() {
        this.score = 0;
        this.highscore = 0;
        this.gravity = 0.4;
        this.velocity = 5;
        this.width = 50;
        this.height = 50;
        this.x = 50 ;
        // height of the canvas/height of the player
        this.y = height/5;
    }

    draw() {
        // console.log('drawing player')
        // the gravity pushes the player down
        this.velocity += this.gravity;
        this.y += this.velocity;
        // this prevents the  player from moving further down thn where
        // the top left corner of the image should
        if (this.y >= height - this.height) {
            this.y = height - this.height;
        }
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }

    jump() {
        // console.log('player jumping');
        this.velocity = - 7  ;
    }
}