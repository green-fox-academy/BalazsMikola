
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawLines(x:number, y:number):void {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(canvas.scrollWidth/2,canvas.scrollHeight/2);
    ctx.stroke();
}

for(let i:number=1; i<=3; i++){
    let x:number = Math.floor((Math.random() * canvas.scrollWidth) + 0);
    let y:number = Math.floor((Math.random() * canvas.scrollHeight) + 0);
    drawLines(x,y);
}
