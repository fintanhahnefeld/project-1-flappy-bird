class Game {
    constructor() {
        this.backgroundImage;
        this.playerImage;
        this.coinImage;
        this.floor;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
    }
    preload() {
        this.backgroundImage = loadImage('assets/background/city.png');
        this.floor = loadImage('assets/background/floor.png')
        this.playerImage = loadImage('assets/player/bird.png');
    }
    draw() {
        clear();
        this.background.draw();
        this.player.draw();
    }
}