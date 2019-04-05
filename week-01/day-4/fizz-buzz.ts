'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let myOutput;

for (let i:number=1; i<=100; i++){
    myOutput = i;
    if (i%3===0 && i%5===0) {
        myOutput = 'FizzBuzz';
    }
    if (i%3===0 && i%5!=0) {
        myOutput = 'Fizz';
    }
    if (i%3!=0 && i%5===0) {
        myOutput = 'Buzz';
    }
    console.log(myOutput);
}