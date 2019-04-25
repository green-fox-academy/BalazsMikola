
'use strict';

const dictionary:{[i:string]:number} = {};

export function countLetters(myString:string):{[i:string]:number}{
  
  for(let i:number=0; i<myString.length; i++){

    if(dictionary[myString[i]]) dictionary[myString[i]] += 1; else dictionary[myString[i]] = 1;

  };
  return dictionary;
};
