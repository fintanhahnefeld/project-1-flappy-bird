const game = new Game();

let sfxJump;
let sfxSuccess;
let musicLoop;
let sfxOuch;

function preload() {
    game.preload();
    soundFormats('mp3','ogg'); 
    sfxJump = loadSound('assets/sfx/up.mp3');
    sfxSuccess = loadSound('assets/sfx/success.mp3');
    sfxOuch = loadSound('assets/sfx/ouch2.mp3');
    musicLoop = loadSound('assets/sfx/flappyloop.mp3');
}
// 
function setup() {
    createCanvas(450, 580)
    game.setup();
    sfxJump.setVolume(1.5);
    sfxSuccess.setVolume(1);
    sfxOuch.setVolume(0.5);
    musicLoop.setVolume(0.2); 
    // musicLoop.loop();
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

    // RETURNS TO PREGAME STATE 
    if (game.isGameOver === true && keyCode === 13) {

        game.player.score = 0; 

        game.pipesArray.splice(0, game.pipesArray.length);
        console.log('logging this')

        game.isGameOver = false;
        game.isPreGame = true;
         
         
        game.player.y = 250;
 
        loop()        
        
        musicLoop.loop()
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

// function mousePressed() {
//     game.player.jump()
// }

// function reset() {

// }