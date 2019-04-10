'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(200,100);
ctx.lineTo(400,100);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400,100);
ctx.lineTo(400, 300);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(200, 300);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(200, 100);
ctx.strokeStyle = "black";
ctx.stroke();
