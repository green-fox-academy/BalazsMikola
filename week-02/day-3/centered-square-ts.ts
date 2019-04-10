'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

ctx.fillStyle = 'green';
ctx.strokeRect((canvas.scrollWidth/2)-5, (canvas.scrollHeight/2)-5, 10, 10);
