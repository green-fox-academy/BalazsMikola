'use strict';

class Student {
  name:string;
  age:number;
  gender:string;
  goal:string;
  previousOrganization:string;
  skippedDays:number;

  constructor(name:string,age:number,gender:string, previousOrganization:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  introduce():string {
    return `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} from ${this.previousOrganization } 
    who skipped ${this.skippedDays} days from the course already.`;
  }

  skipDays(numberOfDays:number){
    this.skippedDays += numberOfDays;
  }

  getGoal(goal:string):string {
    return 'My goal is: '+goal;
  }
}

let newStudent:Student = new Student('Jane Doe', 30, 'female', 'The School of Life');
newStudent.skipDays(1);
console.log(newStudent.introduce(), newStudent.getGoal('Be a junior software developer!'));


export {};