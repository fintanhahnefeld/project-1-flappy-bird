const game = new Game();


function preload() {
    game.preload();
}

function setup() {
    createCanvas(450, 580)
    game.setup();
    
}

function draw() {
    game.draw();
}

function keyPressed() { 
    // spacebar makes the player jump
    if (keyCode === 32) {
        // console.log('space bar pressed')
        game.player.jump();
    }
}

