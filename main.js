// Canvas setup
x = 200; // x-position of the walker
y = 150; // y-position of the walker
let canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 300;

let ctx = canvas.getContext('2d');

class Walker{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    display(){
        ctx.moveTo(x,y);            
        ctx.lineTo(x+1,y+1);
        ctx.stroke();   
    }

    step(){
        let choice = Math.floor(Math.random() * 8);

        // checks if choice is valid and execute the appropriate step
        if (choice == 0 && y > 0) {
            y--;  // Move Up     
        } 
        else if(choice == 1 && x < canvas.width) {
            x++; //Move right
        }
        else if (choice == 2 && y < canvas.height) {
            y++; // Move down
        }
        else if (choice == 3 && x > 0) {
            x--; // Move Left
        }
        else if(choice == 4 && x < canvas.width && y > 0){
            // Move diagonally up and to the right
            y--;
            x++;
        }
        else if(choice == 5 && x < canvas.width && y < canvas.height){
            // Move diagonally down and to the right
            y++;
            x++;
        }
        else if(choice == 6 && x < canvas.width && x > 0){
            // Move diagonally up and to the left
            y--;
            x--;
        }
        else if(choice == 7 && x < canvas.width && y < canvas.height){
            // Move diagonally down and to the left
            y++;
            x--;
        }
        else{
            console.log('The choice is: '+choice);
        }
    }

}

let walker = new Walker(200,400);


// Canvas rendering
window.onload = function(){

    function draw() {
        walker.display();
        walker.step();
    }    
    
    setInterval(() => {
        draw();
    }, 1);

      
    
};