'use strict';

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

export { Flower };
