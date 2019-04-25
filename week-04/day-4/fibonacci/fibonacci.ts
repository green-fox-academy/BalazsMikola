/*
Write a function that computes a member of the fibonacci sequence by a given index
Create tests for multiple test cases.
*/
'use strict';

const listForFibo:number[] = [0,1];

export function fibonacci(index:number):number{
  for(let i:number=2; i<index+1; i++){
    listForFibo[i] =  listForFibo[i-1] + listForFibo[i-2];
  };
  return listForFibo[index];
};
