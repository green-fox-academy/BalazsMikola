'use strict';

import { Sharpie } from './Sharpie';

class SharpieSet {
  listOfSharpie: Sharpie[] = [];

  countUsable():void{
    console.log(`You can still use ${this.listOfSharpie.length} pieces of sharpie`);
  }

  removeTrash():void{
    let toDelete:number[] = [];
    
    for(let i:number=0; i<this.listOfSharpie.length; i++){
      if(this.listOfSharpie[i].inkAmount <= 0) toDelete.push(i);
    }
    
    for(let i:number=0; i<toDelete.length; i++){
      delete this.listOfSharpie[toDelete[i]];
    }
    
  }

}

export { SharpieSet };