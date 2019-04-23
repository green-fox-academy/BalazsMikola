'use strict';

class Mentor {
  name:string;
  age:number;
  gender:string;
  goal:string;
  level:string;

  constructor(name:string,age:number,gender:string, level:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  introduce():string {
    return `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} ${this.level} mentor.`;
  }
  getGoal(goal:string):string {
    return 'My goal is: '+goal;
  }
}

let newMentor:Mentor = new Mentor('Jane Doe', 30, 'female', 'intermediate');
console.log(newMentor.introduce(), newMentor.getGoal('Educate brilliant junior software developers.'));


export {};