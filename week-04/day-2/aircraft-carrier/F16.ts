'use strict';

import { Aircraft } from "./Aircraft";

export class F16 extends Aircraft {

  constructor(maxAmmo:number=8,baseDamage:number=30,ammoStorage:number=0,typeOfAircraft:string='F16',priority:boolean = false){
    super();
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.ammoStorage = ammoStorage;
    this.typeOfAircraft = typeOfAircraft;
    this.priority = priority;
  };
};
