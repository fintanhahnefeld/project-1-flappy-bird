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
        
    
        if (game.isPreGame === true) {
            document.querySelector('h2 span').style.visibility="hidden";   
        } else if (game.isPreGame === false) {
            document.querySelector('h2 span').style.visibility="visible";   
        }

        if (game.isGameOver === true) {
            document.querySelector('h2 span').style.visibility="hidden";   
            document.querySelector('#game-over').style.visibility="visible";   
        } else if (game.isGameOver === false) {
            document.querySelector('#game-over').style.visibility="hidden";   

        }

        // UPDATE SCORE DISPLAY AND GAME OVER DISPLAY
        document.querySelector('h2 span').innerText = game.player.score; 
        document.querySelector('#game-over').querySelector('h4 span').innerText = game.player.score; 
        document.querySelector('#high-score').querySelector('span').innerText = game.player.highscore; 
    }
       
}  