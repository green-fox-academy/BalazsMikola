'use strict';

import { Station } from './station';

class Car{
  gasAmount:number;
  capacity:number;

  constructor(gasAmount:number = 0, capacity:number = 100){
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }

}

let newCar:Car = new Car();
let newStation:Station = new Station();

newStation.refill(newCar);
console.log(`The car capacity is ${newCar.capacity}. We filled the car so the gas amount of the car now is: ${newCar.gasAmount}.
The gas amount of the station decreased: ${newStation.gasAmount}`);

export { Car };