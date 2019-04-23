
'use strict';

import { SharpieSet } from './sharpieset';

class Sharpie{
  color:string;
  width:number;
  inkAmount:number;

  constructor(color:string, width:number){
    this.color = color;
    this.width = width;
    this.inkAmount = 100.0;
  }
  use():void{
    this.inkAmount -= 1;
    console.log(`Sharpie has been used so now the amount of ink is: ${this.inkAmount}`);
    
  }
}

const newSharpieSet:SharpieSet = new SharpieSet();
const mySharpie:Sharpie = new Sharpie('blue', 1.5);
const mySharpie2:Sharpie = new Sharpie('red', 1.5);

newSharpieSet.listOfSharpie.push(mySharpie, mySharpie2);
mySharpie.use();
console.log(newSharpieSet.listOfSharpie);

newSharpieSet.countUsable();
newSharpieSet.removeTrash();


export { Sharpie };

