
'use strict';

const listForFibo:number[] = [0,1];

function fibonacci(length:number){
  for(let i:number=2; i<length; i++){
    listForFibo[i] =  listForFibo[i-1] + listForFibo[i-2];
  }
  console.log(listForFibo);
}
fibonacci(10);

export {};
