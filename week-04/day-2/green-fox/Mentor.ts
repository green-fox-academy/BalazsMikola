'use strict';

import { Person } from "./Person";

class Mentor extends Person{

  level:string;

  constructor(name:string='Jane Doe', age:number=30, gender:string='female', level:string='intermediate'){
    super();
    this.level = level;
  }

  introduce():string {
    return `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} ${this.level} mentor.`;
  }
}

export { Mentor };