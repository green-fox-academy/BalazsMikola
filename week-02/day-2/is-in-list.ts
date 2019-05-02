'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(list:number[], lookFor:number[]):boolean{

  let counter:number = 0;
  for(let i:number=0; i<list.length; i++){
    for(let j:number=0; j<lookFor.length; j++){
      if(list[i] === lookFor[j]) counter++;
    };
  };
  if(counter === lookFor.length) return true; else return false;

};
console.log(checkNums(listOfNumbers,[4,8,12,16]));
export = checkNums;
