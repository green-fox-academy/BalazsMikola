'use strict';

export class Animal{
  public animalType:string;
  public hunger:number;
  protected thirst:number;

  constructor(animalType:string, hunger:number = 50, thirst:number = 50){
    this.animalType = animalType;
    this.hunger = hunger;
    this.thirst = thirst;
  };

  eat():void{
    this.hunger--;
    console.log(`Your animal did eat so the hunger now is ${this.hunger}`);
  };

  drink():void{
    this.thirst--;
    console.log(`Your animal did drink so the thirst now is ${this.hunger}`);
  };

  play():void{
    this.hunger++;
    this.thirst++;
    console.log(`Your animal did play so the hunger and the thirst now is ${this.hunger}, ${this.thirst}`);
  };
};
