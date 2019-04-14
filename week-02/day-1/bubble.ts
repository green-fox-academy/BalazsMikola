'use strict'
//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function advancedBubble(array:number[], bool:boolean = false):number[] {
  let sortedArray:number[] = [];
  let i=0;
  while (array.length!=0){
    bool === false ? sortedArray[i] = array.splice(array.indexOf(Math.min(...array)), 1)[0] :
    sortedArray[i] = array.splice(array.indexOf(Math.max(...array)), 1)[0];
    i++;
  }
  return sortedArray;
}
//  Example:
//  console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
