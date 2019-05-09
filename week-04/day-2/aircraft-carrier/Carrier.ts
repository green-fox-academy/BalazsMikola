'use strict';

import { Aircraft } from "./Aircraft";
import { F16 } from "./F16";
import { F35 } from "./F35";

export class Carrier{

  protected aircrafts:Aircraft[] = [];
  protected ammoStorageOfCarrier:number;
  protected hp:number;

  constructor(initialAmmo:number,hp:number){
    this.ammoStorageOfCarrier = initialAmmo;
    this.hp = hp;
  };

  add(typeOfNewAircraft:string):void{
    if(typeOfNewAircraft === 'F16') { this.aircrafts.push(new F16()) }
    else if(typeOfNewAircraft === 'F35') { this.aircrafts.push(new F35()) }
    else console.log('We can not store this type of aircraft!');
  };

  fill():void{
    let ammoCounter:number = 0;
    for(let i:number=0; i<this.aircrafts.length; i++){
      ammoCounter += (this.aircrafts[i].maxAmmo - this.aircrafts[i].ammoStorage);
    };
    if(ammoCounter<=this.ammoStorageOfCarrier) {
      for(let i:number=0; i<this.aircrafts.length; i++){
        this.ammoStorageOfCarrier = this.aircrafts[i].refill(this.ammoStorageOfCarrier);
      };
    }else{
      for(let i:number=0; i<this.aircrafts.length; i++){
        if(this.aircrafts[i].isPriority() && (this.aircrafts[i].maxAmmo-this.aircrafts[i].ammoStorage) <= this.ammoStorageOfCarrier){
          this.ammoStorageOfCarrier = this.aircrafts[i].refill(this.ammoStorageOfCarrier);
        };
      };
    };
  };

  fight(enemy:Carrier):string{
    for(let i:number=0; i<this.aircrafts.length; i++){
      enemy.hp -=  this.aircrafts[i].ammoStorage * this.aircrafts[i].baseDamage;
    };
    if(enemy.hp <= 0){
      return 'Enemy destroyed!!';
    }else return `Enemy is still alive: hp: ${enemy.hp}`;
  };

  getStatus():string{
    if(this.hp <= 0){ return `It's dead Jim :(`; }else{
      let status:string = `HP: ${this.hp},  Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorageOfCarrier},\n
      Aircrafts:\n
      ${this.aircrafts}`;
      return status;
    };
  };
  
 
};
