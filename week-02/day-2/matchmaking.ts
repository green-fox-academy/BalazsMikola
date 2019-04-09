'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let pairs:any = [];

function makingMatches(girls:string[], boys:string[]):string[] {
    for(let i:number=0; i!=girls.length; i){
        pairs.push(girls.shift());
        pairs.push(boys.shift());  
    }
    if(girls.length!=0)pairs.push(girls.shift());
    if(boys.length!=0)pairs.push(boys.shift());
    return pairs;
}
console.log(makingMatches(girls, boys));

export = makingMatches;
