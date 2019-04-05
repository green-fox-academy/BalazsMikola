'use strict';

let lineCount: number = 10;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let brickForTriangle: string = "";
let i:number=1;

while (i <= lineCount) {
    brickForTriangle = brickForTriangle + "*";
    console.log(brickForTriangle);
    i++;
}