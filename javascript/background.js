class Background {
    constructor() {
        this.imgx = 0;
    }

    draw() {
        // city background
        image(game.backgroundImage, this.imgx, 0, width, height -70);
        image(game.backgroundImage, this.imgx + width, 0, width, height -70);

        // moving city background
        this.imgx -= 0.2;
        if ( this.imgx <=  - width) {
            this.imgx = 0;
        }
        }
}

class Ground {
    constructor() {
        this.floorx = 0;
    }
    draw() {
        // lines
        stroke('#272b30')
        strokeWeight(2)
        line(0, height -69, width, height -69)
        stroke('#ded895')
        strokeWeight(2)
        line(0, height -67, width, height -67)
        
        // floor
        image(game.floor, this.floorx, height - 66, width, 12)
        image(game.floor, this.floorx + width, height - 66, width, 12)
        
        // moving floor
        this.floorx -= 2;
        if ( this.floorx <=  - width) {
            this.floorx = 0;
        } 
 
        // more lines
        stroke('#48771b')
        strokeWeight(2)
        line(0, height -53, width, height -53)
        stroke('#ce974e')
        strokeWeight(2)
        line(0, height -51, width, height -51)

        // bottom floor
        fill('#e0dbaa')
        noStroke();
        rect(0, height -50, width, height)


    }
}  
