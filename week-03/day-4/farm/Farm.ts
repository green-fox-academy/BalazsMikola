'use strict';

import { Animal } from "./Animal";

export class Farm{
  protected listOfAnimals:Animal[] = [];
  protected slotsForAnimals:number;

  constructor(slotsForAnimals:number = 10){
    this.slotsForAnimals = slotsForAnimals;
  };

  breed():void{
   
  };

  slaughter():void{
   
  };
};