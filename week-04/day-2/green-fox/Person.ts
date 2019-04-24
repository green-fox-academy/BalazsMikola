'use strict';

class Person {
  name:string;
  age:number;
  gender:string;
  goal:string;

  constructor(name:string='Jane Doe', age:number=30, gender:string='female'){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce():string {
    return `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender}.`;
  }
  getGoal(goal:string):string {
    return 'My goal is: '+goal;
  }
}

export { Person };