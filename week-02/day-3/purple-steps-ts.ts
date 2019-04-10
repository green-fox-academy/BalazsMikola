'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


let size:number = 20;
let x:number = 0;
let y:number = 0;

for(let i:number=1; i<=19; i++){
    ctx.strokeStyle = "black";
    ctx.strokeRect(x,y, size, size);
    ctx.fillStyle = "purple";
    ctx.fillRect(x,y, size, size);
    x = x+size; y = y+size;
}
