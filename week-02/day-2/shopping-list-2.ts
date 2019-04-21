
'use strict';

const prices: {[i:string]:number} = {
  'Milk':1.07,
  'Rice':1.59,
  'Eggs':3.14,
  'Cheese':12.60,
  'Chicken Breasts':9.40,
  'Apples':2.31,
  'Tomato':2.58,
  'Potato':1.75,
  'Onion':1.10
};
const bobList: {[i:string]:number} = {
  'Milk':3,
  'Rice':2,
  'Eggs':2,
  'Cheese':1,
  'Chicken Breasts':4,
  'Apples':1,
  'Tomato':2,
  'Potato':1
};
const aliceList: {[i:string]:number} = {
  'Rice':1,
  'Eggs':5,
  'Chicken Breasts':2,
  'Apples':1,
  'Tomato':10
};
/*
Create an application which solves the following problems.
How much does Bob pay?
How much does Alice pay?
Who buys more Rice?
Who buys more Potato?
Who buys more different products?
Who buys more products? (piece)*/

function pay(listOfBob:{[i:string]:number}, listOfAlice:{[i:string]:number}, listOfPrices:{[i:string]:number}):number[]{

  let amountToPayBob:number = 0;
  let amountToPayAlice:number = 0;
  let result:number[] = [];

  for(let i:number=0; i<Object.keys(listOfBob).length; i++){
    amountToPayBob = amountToPayBob + (listOfPrices[Object.keys(listOfBob)[i]] * listOfBob[Object.keys(listOfBob)[i]]);
  }
  result.push(amountToPayBob);

  for(let i:number=0; i<Object.keys(listOfAlice).length; i++){
    amountToPayAlice = amountToPayAlice + (listOfPrices[Object.keys(listOfAlice)[i]] * listOfAlice[Object.keys(listOfAlice)[i]]);
  }
  result.push(amountToPayAlice);
  return result;
}

function whoBuysMore(listOfBob:{[i:string]:number}, listOfAlice:{[i:string]:number}, toCompare:string){
  if(listOfBob[toCompare] < listOfAlice[toCompare]) console.log(`Alice buys more ${toCompare}`);
  if(listOfBob[toCompare] > listOfAlice[toCompare]) console.log(`Bob buys more ${toCompare}`);
  if(Object.keys(listOfBob).length > Object.keys(listOfAlice).length) console.log(`Bob buys more different product`); else console.log(`Bob buys more different product`);
  
}

function moreProduct(listOfBob:{[i:string]:number}, listOfAlice:{[i:string]:number}):void{
  let piecesOfBob:number = 0;
  let piecesOfAlice:number = 0;
  for(let i:number=0; i<Object.values(listOfBob).length; i++){
    piecesOfBob = piecesOfBob + listOfBob[Object.keys(listOfBob)[i]];
  }
  for(let i:number=0; i<Object.values(listOfAlice).length; i++){
    piecesOfAlice = piecesOfAlice + listOfAlice[Object.keys(listOfAlice)[i]];
  }
  if(piecesOfBob>piecesOfAlice) console.log(`Bob buys more products(piece)`); else
  console.log(`Alice buys more products(piece)`);
}

let amountToPay:number[] = pay(bobList, aliceList, prices);
console.log(`Amount to pay for Bob: ${amountToPay[0]}, and for Alice: ${amountToPay[1]}`);
whoBuysMore(bobList, aliceList, 'Rice');
moreProduct(bobList, aliceList);
