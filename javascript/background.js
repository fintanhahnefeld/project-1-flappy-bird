class Background {
    constructor() {
        this.imgx = 0;
        this.floorx = 0;
    }

    draw() {
        // city background
        image(game.backgroundImage, this.imgx, 0, width, height);
    }
}