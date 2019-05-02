'use strict';

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(list:string[]):string[]{
  
  for(let i:number=0; i<list.length; i++){
    list[i] = list[i] + 'a';
  };
  return list;
};
console.log(appendA(far));
export = appendA;
