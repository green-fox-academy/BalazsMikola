'use strict';

class Sponsor {
  name:string;
  age:number;
  gender:string;
  goal:string;
  company:string;
  hiredStudents:number;

  constructor(name:string,age:number,gender:string, company:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce():string {
    return `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`;
  }

  hire(){
    this.hiredStudents++;
  }

  getGoal(goal:string):string {
    return 'My goal is: '+goal;
  }
}

let newSponsor:Sponsor = new Sponsor('Jane Doe', 30, 'female', 'Google');
newSponsor.hire();
console.log(newSponsor.introduce(), newSponsor.getGoal('Hire brilliant junior software developers.'));


export {};