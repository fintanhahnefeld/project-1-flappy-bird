# Flappy bird clone

## About

This project was made as part of a web development bootcamp at IRONHACK Berlin in March of 2021.
It is built using [p5js](https://p5js.org/), with HTML, CSS and Javascript technologies, and applies 
the principles of object oriented programming.

I chose to clone flappy bird because it was a game I enjoyed to play on mobile back in 2014 when it was first released.
You can find out more about the original game [here](https://en.wikipedia.org/wiki/Flappy_Bird).

## Technical challenges

My biggest challenge was to write the mathematical logic that calculates collisions between the player and the obstacles.
This was difficult because the obstacles should always appear at random heights and always have the same distance between them for the gap.
Below is a demonstration of some the code that I implemented to solve this:

```
 draw() {
        
        //the top pipe y position should be random between -250 and 0
        image(this.pipeTopImg, this.x, this.y -255, this.pipeWidth, this.pipeHeight)
        //the bottom pipe y position should be random between 200 and 450 
        image(this.pipeBottomImg, this.x, this.y +205, this.pipeWidth, this.pipeHeight) 
         
        // pipe speed
        this.x -= 2.5;

    }

    collision(playerInfo) {

        // BIRD // COLLISION ADJUSTMENTS
        let birdLeft = playerInfo.x +5;
        let birdRight = playerInfo.x + playerInfo.width -5; 
        let birdTop = playerInfo.y +2;
        let birdBottom = playerInfo.y + playerInfo.height -2;
        // TOP PIPE
        let pipe1Left = this.x; 
        let pipe1Right = this.x + this.pipeWidth; 
        let pipe1Top = this.y -255;
        let pipe1Bottom = this.y + this.pipeHeight -255;
        // BOTTOM PIPE
        let pipe2Left = this.x; 
        let pipe2Right = this.x + this.pipeWidth; 
        let pipe2Top = this.y + 205;
        let pipe2Bottom = this.y + this.pipeHeight +205;
          
        // TOP PIPE COLLISION CHECK
        if (birdRight > pipe1Left && birdLeft < pipe1Right && birdTop < pipe1Bottom && birdBottom > pipe1Top) { 
            game.isGameOver = true;
            sfxOuch.play();  
            musicLoop.stop();   
        }
        
        // BOTTOM PIPE COLLISION CHECK
        if (birdRight > pipe2Left && birdLeft < pipe2Right && birdTop < pipe2Bottom && birdBottom > pipe2Top) {
            game.isGameOver = true;
            sfxOuch.play(); 
            musicLoop.stop();                 
        }
 ```
 
 ## Play the game
 
 See if you can beat my highscore of 34. [Play the game!](https://fintanhahnefeld.github.io/project-1-flappy-bird/)
 
 ## Contact me
 
 Feel free to contact me at fintan22@gmail.com if you have any questions.
