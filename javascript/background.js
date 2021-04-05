class Background {
    constructor() {
        this.imgx = 0;
        this.floorx = 0;
    }

    draw() {
        // city background
        image(game.backgroundImage, this.imgx, 0, width, height);
        image(game.backgroundImage, this.imgx +width, 0, width, height);

        // moving city background
        this.imgx -= 0.2;

        if ( this.imgx <=  -width) {
            this.imgx = 0;
        }

        // moving floor
        image(game.floor, this.floorx, height - 12, width, 12, )
    }
}