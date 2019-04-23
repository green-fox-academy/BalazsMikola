'use strict';

import { Person } from './person';

class Student extends Person{

  previousOrganization:string;
  skippedDays:number;

  constructor(name:string='Jane Doe', age:number=30, gender:string='female', previousOrganization:string='The School of Life'){
    super();
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }
  skipDays(numberOfDays:number){
    this.skippedDays += numberOfDays;
  }
}

export { Student };
