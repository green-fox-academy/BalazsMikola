'use strict';

class Person {
  name:string;
  age:number;
  gender:string;
  goal:string;

  constructor(name:string,age:number,gender:string){
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

let newPerson:Person = new Person('Jane Doe', 30, 'female');
console.log(newPerson.introduce(), newPerson.getGoal('Live for the moment!'));


export {};