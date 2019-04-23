'use strict';

//import { Person } from './Person';

class Flower {
  waterAmount:number;
  canAbsorb:number;
  needWaterBelow:number;
  color:string;

  constructor(color:string, waterAmount:number=0, canAbsorb:number=0.75, needWaterBelow:number = 5){
    this.waterAmount = waterAmount;
    this.canAbsorb = canAbsorb;
    this.needWaterBelow = needWaterBelow;
    this.color = color;
  };

}
/*
let a:Flower = new Flower('yellow');
console.log(a);
*/
export { Flower };
