/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one*/

'use strict';

class Animal{
  hunger:number;
  thirst:number;

  constructor(hunger:number = 50, thirst:number = 50){
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat(){
    this.hunger--;
    console.log(`Your animal did eat so the hunger now is ${this.hunger}`);
    
  }
  drink(){
    this.thirst--;
    console.log(`Your animal did drink so the thirst now is ${this.hunger}`);
  }
  play(){
    this.hunger++;
    this.thirst++;
    console.log(`Your animal did play so the hunger and the thirst now is ${this.hunger}, ${this.thirst}`);
  }
}

const myAnimal:Animal = new Animal();
myAnimal.eat();
myAnimal.drink();
myAnimal.play();
