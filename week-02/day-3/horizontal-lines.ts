'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawLines(x:number, y:number):void {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y);
    ctx.stroke();
}

for(let i:number=1; i<=3; i++){
    let x:number = Math.floor((Math.random() * canvas.scrollWidth) + 0);
    let y:number = Math.floor((Math.random() * canvas.scrollHeight) + 0);
    x>canvas.scrollWidth-50 ? x = x-50 : x = x;
    drawLines(x,y);
}
