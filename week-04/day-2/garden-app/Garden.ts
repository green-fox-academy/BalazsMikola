'use strict';

import { Flower } from './Flower';
import { Tree } from './Tree';

class Garden{

  listOfFlowers:Flower[] = [];
  listOfTrees:Tree[] = [];

  plant(typeOfPlant:string, color:string){
    if(typeOfPlant==='flower'){
      this.listOfFlowers.push(new Flower(color));
    }else if (typeOfPlant==='tree'){
      this.listOfTrees.push(new Tree(color));
    }else console.log(typeOfPlant + ' is not a flower or a tree so i can not plant it!');
  };

  showGarden(){
    for(let i:number=0; i<this.listOfFlowers.length; i++){
      console.log(`The ${this.listOfFlowers[i].color} Flower ${this.listOfFlowers[i].waterAmount<this.listOfFlowers[i].needWaterBelow ? 'needs' : 'doesnt need'} water`);
    };
    for(let i:number=0; i<this.listOfTrees.length; i++){
      console.log(`The ${this.listOfTrees[i].color} Tree ${this.listOfTrees[i].waterAmount<this.listOfTrees[i].needWaterBelow ? 'needs' : 'doesnt need'} water`);
    };
  };

  water(amountOfWater:number){

    let needWaterFor:number = 0;

    
    for(let i:number=0; i<this.listOfFlowers.length; i++){
      this.listOfFlowers[i].waterAmount<this.listOfFlowers[i].needWaterBelow ? needWaterFor++ : undefined;
    };
    for(let i:number=0; i<this.listOfTrees.length; i++){
      this.listOfTrees[i].waterAmount<this.listOfTrees[i].needWaterBelow ? needWaterFor++ : undefined;
    };
    let amountOfWaterToGive:number = amountOfWater/needWaterFor;
    

    for(let i:number=0; i<this.listOfFlowers.length; i++){
      this.listOfFlowers[i].waterAmount<this.listOfFlowers[i].needWaterBelow ? 
      this.listOfFlowers[i].waterAmount += (amountOfWaterToGive*this.listOfFlowers[i].canAbsorb) : undefined;
    };
    for(let i:number=0; i<this.listOfTrees.length; i++){
      this.listOfTrees[i].waterAmount<this.listOfTrees[i].needWaterBelow ? 
      this.listOfTrees[i].waterAmount += (amountOfWaterToGive*this.listOfTrees[i].canAbsorb) : undefined;
    };


    needWaterFor = 0;
    amountOfWaterToGive = 0;
    console.log('\nWatering with '+amountOfWater);
    this.showGarden();
  };

};
let newGarden:Garden = new Garden();
newGarden.plant('flower', 'yellow');
newGarden.plant('flower', 'blue');
newGarden.plant('tree', 'purple');
newGarden.plant('tree', 'orange');

newGarden.showGarden();

newGarden.water(40);
newGarden.water(70);
