const game = new Game();
// const scoreNumber = document.querySelector('h2').style.visibility='hidden';

// console.log(scoreNumber);

function preload() {
    game.preload();
}

function setup() {
    createCanvas(450, 580)
    game.setup();
    
}

function draw() {
    game.draw();

    if (game.isGameOver === true) {
        noLoop();
    }
}

function keyPressed() { 
    // spacebar makes the player jump
    if (keyCode === 32) {
        game.player.jump();
                
    if (game.isPreGame === true && keyCode === 32) {
        game.isPreGame = false;
    }

    if (game.isGameOver === true && keyCode === 32) {
        // this.game.preload();
        game.isGameOver = false;
        loop();
    }   
    }
}

