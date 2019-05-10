'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function getNameAndBalance(database:any[],accNum:number):any{
  for(let i:number=0; i<database.length; i++){
    if(database[i].accountNumber === accNum){
      return [database[i].clientName, database[i].balance];
    };
  };
  return `Wrong account number!`;
};
console.log(getNameAndBalance(accounts,23456311));


function transferAmount(database:any[], from:number, to:number, amount:number):any{

  let indexOfFrom:number = -1;
  let indexOfTo:number = -1;

  for(let i:number=0; i<database.length; i++){
    if(database[i].accountNumber === from){
      indexOfFrom = i;
    };
    if(database[i].accountNumber === to){
      indexOfTo = i;
    };
  };
  if(indexOfFrom != -1 && indexOfTo != -1){
    database[indexOfFrom].balance -= amount;
    database[indexOfTo].balance += amount;
    return database;
  }else return `Wrong account number`;
};
console.log(transferAmount(accounts, 11234543, 43546731, 200000000));
