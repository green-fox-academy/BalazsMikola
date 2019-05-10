
'use strict';

class Animal{
  animalType:string;
  hunger:number;
  thirst:number;

  constructor(animalType:string, hunger:number = 50, thirst:number = 50){
    this.animalType = animalType;
    this.hunger = hunger;
    this.thirst = thirst;
  };

  eat(){
    this.hunger--;
    console.log(`Your animal did eat so the hunger now is ${this.hunger}`);
  };

  drink(){
    this.thirst--;
    console.log(`Your animal did drink so the thirst now is ${this.hunger}`);
  };

  play(){
    this.hunger++;
    this.thirst++;
    console.log(`Your animal did play so the hunger and the thirst now is ${this.hunger}, ${this.thirst}`);
  };
};
/*
const myAnimal:Animal = new Animal('sheep');
myAnimal.eat();
myAnimal.drink();
myAnimal.play();
console.log(myAnimal);
*/
