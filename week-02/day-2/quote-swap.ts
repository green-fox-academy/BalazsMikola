'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(list:string[]):string{
  let orderedWords: string[] = [];
  let result:string = '';
  for(let i:number=0; i<list.length; i++){
    orderedWords[i] = list[i];
  };
  orderedWords[2] = list[list.indexOf('cannot')];
  orderedWords[5] = list[list.indexOf('do')];
  for(let i:number=0; i<orderedWords.length; i++){
    result += ' '+orderedWords[i];
  };
  return result;
};
console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
export = quoteSwap;
