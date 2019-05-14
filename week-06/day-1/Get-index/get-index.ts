'use strict';

export function getIndex(list:number[], num:number):number{
  
  if(list.indexOf(num) != -1){
     return list.indexOf(num);
  } else return -1;

};
