// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let givenNumber:number = 5;


function sum(input:number):number {
    let summedNumber:number = 0;
    for(let i:number=0; i<=input; i++){summedNumber = summedNumber+i;}
    return summedNumber;
};
console.log(sum(givenNumber));