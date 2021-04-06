class Game {
    constructor() {        
        this.playerImage;
        this.backgroundImage;
        this.floor;
        this.pipeTop;
        this.pipeBottom;
        this.isPreGame = true;
        this.isGameOver = false;
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

        // ADD PIPES TO PIPEARRAY AND CALL OBSTACLE.DRAW()
        if (this.isPreGame === false) {
        if (frameCount % 120 === 0) {
            this.pipesArray.push(new Obstacle(this.pipeTop, this.pipeBottom))    
        }
        }

        this.pipesArray.forEach(function(obstacle) {
            obstacle.draw();        
    })

        // REMOVE OFF-SCREEN PIPES
        this.pipesArray = this.pipesArray.filter(obstacle => {           
        if (obstacle.x < -80) {
            return false
        } else {
            return true
            
        }
    })
                
        this.ground.draw();
        this.player.draw();

        // CALL COLLISION CONDITION
        this.pipesArray.forEach((obstacle) => {
            if (obstacle.collision(this.player) === true){
                return true;
            }  
        });
        
        if (game.isGameOver === true) {
            document.querySelector('h2 span').style.visibility="hidden";   
            document.querySelector('#game-over').style.visibility="visible";   
        }

    }

    gameOver() {
        // noLoop();
        // game.player.div.hide() 
        //  
        game.isGameOver = true;
        // text(' ', width/2 -16 ,120)

    }
}  