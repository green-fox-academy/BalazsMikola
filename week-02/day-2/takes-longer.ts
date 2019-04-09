'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let firstPart:string = quote.slice(0, 20);
let secondPart:string = quote.slice(21, quote.length);
let myResult:string = firstPart + " always takes longer than " + secondPart;

console.log(myResult);
export = {};
