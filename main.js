// Canvas setup
x = 300;
y = 200;
let canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 400;

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
        let choice = Math.floor(Math.random() * 4);
        if (choice == 0) {
            y++;  // Move Up    
        } 
        else if(choice == 1) {
            x++; //Move right
        }
        else if (choice == 2) {
            y--; // Move down
        }
        else if (choice == 3) {
            x--; // Move Left
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
    }, 100);

      
    
};