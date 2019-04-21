'use strict';

import { Student } from './student';

class Teacher{
  
  answer():void{
    console.log('teacher answered the question');
  };

  teach(student:Student):void{
    student.learn();
  };
}

export { Teacher };
