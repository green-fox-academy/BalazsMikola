'use strict';
//Given a string, compute recursively a new string where all 
//the adjacent chars are now separated by a *

let word:string = 'WOWOWOW';
let index:number = 0;
let newString:string = '';

function addStar(str:string,i:number):any{
    if(i >= str.length-2 ) return newString+str[index];

    newString += str[index]+'*';
    return addStar(word,index++);
};
console.log(addStar(word,index));
