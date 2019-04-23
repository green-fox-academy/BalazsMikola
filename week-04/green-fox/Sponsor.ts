'use strict';

import { Person } from "./Person";

class Sponsor extends Person{

  company:string;
  hiredStudents:number;

  constructor(name:string='Jane Doe', age:number=30, gender:string='female', company:string='Google '){
    super();
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce():string {
    return `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`;
  }

  hire(){
    this.hiredStudents++;
  }
}

let newSponsor:Sponsor = new Sponsor('Google');
newSponsor.hire();
console.log(newSponsor.introduce(), newSponsor.getGoal('Hire brilliant junior software developers.'));


export { Sponsor };