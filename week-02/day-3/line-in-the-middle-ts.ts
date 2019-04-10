'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

ctx.beginPath();
ctx.moveTo(canvas.scrollWidth/2, 0);
ctx.lineTo(canvas.scrollWidth/2, canvas.scrollHeight);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, canvas.scrollHeight/2);
ctx.lineTo(canvas.scrollWidth, canvas.scrollHeight/2);
ctx.strokeStyle = "green";
ctx.stroke();
