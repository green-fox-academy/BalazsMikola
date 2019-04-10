'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(size:number):void {
    ctx.strokeStyle = "rgb("+Math.floor((Math.random() * 255) + 0)+","+Math.floor((Math.random() * 255) + 0)+","+Math.floor((Math.random() * 255) + 0);
    ctx.strokeRect((canvas.scrollWidth/2)-(size/2), (canvas.scrollHeight/2)-(size/2), size, size);
}

for(let i:number=1; i<=3; i++){
    let size:number = Math.floor((Math.random() * canvas.scrollHeight/2) + 0);
    size<20 ? size = 20 : size=size;
    drawSquare(size);
}
