'use strict';

//import { Person } from './Person';

class Tree {
  waterAmount:number;
  canAbsorb:number;
  needWaterBelow:number;
  color:string;

  constructor(color:string, waterAmount:number=0, canAbsorb:number=0.40, needWaterBelow:number = 10){
    this.waterAmount = waterAmount;
    this.canAbsorb = canAbsorb;
    this.needWaterBelow = needWaterBelow;
    this.color = color;
  };
  
}

export { Tree };