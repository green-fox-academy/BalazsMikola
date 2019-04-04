'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let x:number = 5.5;
let y:number = 10.5;
let z:number = 20.5;

let volumeOfCuboid: number = (x*y)*z;
let surfaceArea: number = 2*(x*y) + 2*(x*z) + 2*(y*z);

console.log(`The volume of the cuboid is ${volumeOfCuboid} and the surface area is ${surfaceArea}`);

