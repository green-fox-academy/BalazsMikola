'use strict';

export abstract class Aircraft {

  maxAmmo:number;
  baseDamage:number;
  ammoStorage:number;
  typeOfAircraft:string;
  priority:boolean;


  public fight():number{
    return this.ammoStorage * this.baseDamage;
  };

  public refill(availableAmmo:number):number{
    if(this.ammoStorage < this.maxAmmo){
      let numberOfAmmoNeeded:number = this.maxAmmo - this.ammoStorage;
      availableAmmo -= numberOfAmmoNeeded;
      this.ammoStorage += numberOfAmmoNeeded;
    }
    return availableAmmo;
  };

  public getType():string{
    return this.typeOfAircraft;
  };

  public getStatus():string{
    return `Type: ${this.typeOfAircraft}, Ammo: ${this.ammoStorage}, Base Damage: ${this.baseDamage}, All Damage: ${this.fight()}`
  };

  public isPriority():boolean{
    return this.priority;
  };

};
