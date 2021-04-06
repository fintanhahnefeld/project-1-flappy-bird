class Game {
    constructor() {        
        this.playerImage;
        this.backgroundImage;
        this.floor;
        this.pipeTop;
        this.pipeBottom;
        this.preGame = true;
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

        // add pipes to pipe array and call obstacle.draw()
        if (this.preGame === false) {
        if (frameCount % 160 === 0) {
            this.pipesArray.push(new Obstacle(this.pipeTop, this.pipeBottom))    
        }
        }

        this.pipesArray.forEach(function(obstacle) {
            obstacle.draw();        
    })

        // remove off-screen pipes
        this.pipesArray = this.pipesArray.filter(obstacle => {           
        if (obstacle.x < -80) {
            return false
        } else {
            return true
            
        }
    })
                
        this.ground.draw();
        this.player.draw();

        this.pipesArray.forEach((obstacle) => {
            if (obstacle.collision(this.player) === true){
                return true;
            }  
        });
        

    }

    gameOver() {
        noLoop();
        text('GAME OVER', 110, 200)
    }
} 