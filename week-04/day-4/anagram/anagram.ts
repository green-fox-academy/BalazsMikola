
'use strict';

export function anagram(wordOne:string, wordTwo:string):boolean{
  
  if( wordOne === (wordTwo.split("").sort().join("")) ) return true; else return false;

};
