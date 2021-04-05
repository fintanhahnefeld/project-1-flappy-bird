let x = 0;

function preload() {
    
}

function setup() {
    createCanvas(600, 600)

    
}

function draw() {
    background(100)
    fill(255)

    circle(100, 500, 50)
    clear();
    

}

function keyPressed() { 
    // spacebar makes the player jump
    if (keyCode === 32) {
        console.log('space bar pressed')
    }
}

