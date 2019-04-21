'use strict';

import { Teacher } from './teacher';

class Student {

  learn():void{
    console.log('student learned something');
  };

  question(teacher:Teacher):void{
    teacher.answer();
  };
};

let student2:Student = new Student();
let teacher2:Teacher = new Teacher();

student2.question(teacher2);
teacher2.teach(student2);

export { Student };
