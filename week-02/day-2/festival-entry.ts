'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
 name: string,
 alcohol: number,
 guns: number
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(listOfQueue:FestivalGoer[]):FestivalGoer[]{
  let indexToRemove:number[] = [];
  for(let i:number=0; i<listOfQueue.length; i++){
    if(listOfQueue[i].alcohol > 0){
      securityAlcoholLoot += listOfQueue[i].alcohol
      listOfQueue[i].alcohol = 0;
    };
    if(listOfQueue[i].guns > 0){
      watchlist.push(listOfQueue[i].name);
      indexToRemove.push(listOfQueue.indexOf(listOfQueue[i]));
    };
  };
  indexToRemove.reverse();
  for(let i:number=0; i<indexToRemove.length; i++){
    listOfQueue.splice(indexToRemove[i],1);
  };
  return listOfQueue;
};
console.log(securityCheck(queue));

export {};
