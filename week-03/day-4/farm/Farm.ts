'use strict';

import { Animal } from "./Animal";

export class Farm{
  protected listOfAnimals:Animal[] = [];
  protected slotsForAnimals:number;

  constructor(slotsForAnimals:number = 10){
    this.slotsForAnimals = slotsForAnimals;
  };

  breed(type:string):string{
    if(this.slotsForAnimals > 0){
      this.listOfAnimals.push(new Animal(type))
    }else return 'No more space for new aminal!';
  };

  slaughter():void{
    console.log(this.listOfAnimals);
    let howHungry:number[] = [];
    for(let i:number=0; i<this.listOfAnimals.length; i++){
      howHungry.push(this.listOfAnimals[i].hunger);
    };
    this.listOfAnimals.splice(howHungry.indexOf(Math.max(...howHungry)),1);
    console.log(this.listOfAnimals);
    
    //howHungry.indexOf(Math.max(...howHungry))   
  };
};