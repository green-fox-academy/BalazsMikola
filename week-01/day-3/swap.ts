'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

let container: number;

container = a;
a = b;
b = container;


console.log(a);
console.log(b);