'use strict';

export class Sharpie{
  color:string;
  width:number;
  inkAmount:number;

  constructor(color:string, width:number){
    this.color = color;
    this.width = width;
    this.inkAmount = 100.0;
  };
  use():void{
    this.inkAmount -= 1;
    console.log(`Sharpie has been used so now the amount of ink is: ${this.inkAmount}`);
    
  };
};
