'use strict';

import { Car } from './car';

class Station{

  gasAmount:number = 1000;

  refill(car:Car){
    this.gasAmount = this.gasAmount - car.capacity;
    car.gasAmount = car.gasAmount + car.capacity;
  }

}

export { Station };