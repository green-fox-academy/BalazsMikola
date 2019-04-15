'use strict';
/*
Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
*/
const spendings:number[] = [500, 1000, 1250, 175, 800, 120];
//Create an application which solves the following problems.

//How much did we spend?
let sum:number = 0;
for(let i:number=0; i<spendings.length; i++){
  sum = sum + spendings[i];
};
console.log(`we spent all together ${sum}`);

//Which was our greatest expense?
console.log(`The greatest expense was ${Math.max(...spendings)}`);
//Which was our cheapest spending?
console.log(`The cheapest expense was ${Math.min(...spendings)}`);
//What was the average amount of our spendings?
console.log(`The average amount is ${sum/spendings.length}`);
