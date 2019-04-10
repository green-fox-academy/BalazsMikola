'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


let size:number = 0;
let x:number = 0;
let y:number = 0;

for(let i:number=0; i<=120; i+=20){
    ctx.strokeStyle = "black";
    ctx.strokeRect(x,y, size+i, size+i);
    ctx.fillStyle = "purple";
    ctx.fillRect(x,y, size+i, size+i);
    x = x+i; y = y+i;
}
