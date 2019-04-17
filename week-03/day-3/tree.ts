'use strict';

class Tree{
  type: string;
  leafColor: string;
  age: number;
  gender: string;
  isEvergreen: boolean;

  constructor(type:string, leafColor:string, gender:string, isEvergreen:boolean, age:number=0){
    this.age = age;
    this.type = type;
    this.leafColor = leafColor;
    this.gender = gender;
    this.isEvergreen = isEvergreen;
  }

  giveMeInfoAboutMyTree():void{
    console.log(`Your tree is a(n) ${this.type} and ${this.gender + ' ' + this.age} with ${this.leafColor} leaves and it is ${this.isEvergreen ? 'evergreen': 'not evergreen'}`);
  }
}

const myFirstTree: Tree = new Tree('oak', 'green', 'female', false);
myFirstTree.giveMeInfoAboutMyTree();
