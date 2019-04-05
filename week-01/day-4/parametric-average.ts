'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let inputNumber: number = 5;
let container: number = 0;
let average: number;

for (let i:number=1; i<=inputNumber; i++){
    container = container + i;
    average = container/inputNumber;
}

console.log(`Sum: ${container}, Average: ${average}`);