'use strict';

let lineCount: number = 7;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let container:string = "";

for (let i:number=1; i<=lineCount; i++){
    for(let j:number=0; j<=lineCount-i; j++) container=container+" ";
    for(let k:number=1; k<=(i*2)-1; k++) container=container+"*";
    console.log(container);
    container="";
}