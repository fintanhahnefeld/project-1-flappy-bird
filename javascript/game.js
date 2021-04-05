class Game {
    constructor() {        
        this.playerImage;
        this.backgroundImage;
        this.floor;
        this.pipeTop;
        this.pipeBottom;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();        
        this.ground = new Ground()
        this.pipesArray = [];
    }
    preload() {
        this.backgroundImage = loadImage('assets/background/city.png');
        this.floor = loadImage('assets/background/floor.png');
        this.playerImage = loadImage('assets/player/bird.png');
        this.pipeTop = loadImage('assets/obstacle/pipeTop.png');
        this.pipeBottom = loadImage('assets/obstacle/pipeBottom.png');
    }
    draw() {
        clear();
        this.background.draw();

        if (frameCount % 160 === 0) {
            this.pipesArray.push(new Obstacle(this.pipeTop, this.pipeBottom))
            // this.pipesArray.push(new Obstacle(this.pipeBottom))
            // console.log(this.obstacles);
        }
        this.pipesArray.forEach(function(obstacle) {
            obstacle.draw();
        })
        
        this.ground.draw();
        this.player.draw();
        
    }
}