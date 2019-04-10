'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLines(x:number, y:number):void {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(canvas.scrollWidth/2,canvas.scrollHeight/2);
    ctx.stroke();
}


    for(let i:number=0; i<=canvas.scrollWidth; i+=20){
        drawLines(i,0);
    }
    for(let j:number=0; j<=canvas.scrollHeight; j+=20){
        drawLines(0,j);
    }
    for(let k:number=0; k<=canvas.scrollWidth; k+=20){
        drawLines(k,canvas.scrollHeight);
    }
    for(let l:number=0; l<=canvas.scrollHeight; l+=20){
        drawLines(canvas.scrollWidth,l);
    }
