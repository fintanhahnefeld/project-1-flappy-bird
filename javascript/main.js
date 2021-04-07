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
    clear();
    game.draw();

    if (game.isGameOver === false && game.isPreGame === true) {
        loop();
    } 
     
    if (game.isGameOver === true) {
        noLoop();
    } 
    
}

function keyPressed() {

    // if(keyCode === 13){
    //     console.log('enter pressed');
    //     game.pipesArray.splice(0, game.pipesArray.length);
    // }

    // RETURNS TO PREGAME STATE ?
    if (game.isGameOver === true && keyCode === 13) {

        game.player.score = 0; 

        game.pipesArray.splice(0, game.pipesArray.length);
        console.log('logging this')

        game.isGameOver = false;
        game.isPreGame = true;
         
         
        game.player.y = 250;
 
        loop()         
        
        
    } 
 
    // SPACE BAR MAKES PLAYER JUMP
    if (keyCode === 32) { 
        game.player.jump();
                
    // ACTIVTES JUMP FUNCTIONALITY AND ACTIVATES OBSTACLES
    if (game.isPreGame === true && keyCode === 32) {
        game.isPreGame = false;
    }

      
    }
}

