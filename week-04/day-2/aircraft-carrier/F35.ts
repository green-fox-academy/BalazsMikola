'use strict';

import { Aircraft } from "./Aircraft";

export class F35 extends Aircraft {

  constructor(maxAmmo:number=12,baseDamage:number=50,ammoStorage:number=0,priority:boolean = true){
    super();
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.ammoStorage = ammoStorage;
    this.typeOfAircraft = 'F35';
    this.priority = priority;
  };
};
