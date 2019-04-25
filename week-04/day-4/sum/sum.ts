
'use strict';

export class sumClass {
  sum(list:number[]):number{
    let sum:number = 0;
    list.forEach(element => {sum += element; return sum;} );
    return sum;
  };
};
