'use strict';

import { Animal } from "./Animal";

export class Farm{
  public listOfAnimals:Animal[] = [];
  protected slotsForAnimals:number;

  constructor(slotsForAnimals:number = 10){
    this.slotsForAnimals = slotsForAnimals;
  };

  breed(type:string):string{
    if(this.slotsForAnimals > 0){
      this.listOfAnimals.push(new Animal(type));
      this.slotsForAnimals--;
    }else return 'No more space for new aminal!';
  };

  slaughter():string{
    let howHungry:number[] = [];
    for(let i:number=0; i<this.listOfAnimals.length; i++){
      howHungry.push(this.listOfAnimals[i].hunger);
    };
    let aminalToKill:string = `Your ${this.listOfAnimals[howHungry.indexOf(Math.max(...howHungry))].animalType} was fat so we did slaughter and cook it!`;
    this.listOfAnimals.splice(howHungry.indexOf(Math.max(...howHungry)),1);
    this.slotsForAnimals++;
    return aminalToKill;
  };
};