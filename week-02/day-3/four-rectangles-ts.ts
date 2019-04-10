'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let color:number[] = [];

function drawRectangles(width:number, height:number, color:number[]):void {
    ctx.strokeStyle = "rgb("+color[0]+","+color[1]+","+color[2];
    ctx.strokeRect((canvas.scrollWidth/2)-(width/2), (canvas.scrollHeight/2)-(height/2), width, height);
}

for(let i:number=1; i<=4; i++){
    color[0] = Math.floor((Math.random() * 255) + 0);
    color[1] = Math.floor((Math.random() * 255) + 0);
    color[2] = Math.floor((Math.random() * 255) + 0);
    let width:number = Math.floor((Math.random() * canvas.scrollWidth/2) + 0);
    let height:number = Math.floor((Math.random() * canvas.scrollHeight/2) + 0);
    drawRectangles(width,height,color);
}
