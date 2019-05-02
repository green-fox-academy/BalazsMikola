'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(list:number[]):string{
  
  for(let i:number=0; i<list.length; i++){
    if(list[i] === 7) return 'Hoorray';
  };
  return 'Noooooo';
};

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
console.log(containsSeven([1, 2, 3, 4, 5, 6, 7]));
export = containsSeven;
