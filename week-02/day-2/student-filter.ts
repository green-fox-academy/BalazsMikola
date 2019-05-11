'use strict';

type studentList = {name:string, age:number, candies: number};

const students: studentList[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];


function manyCandies(list:studentList[]):any[]{
  return list.map(element => {if(element.candies > 4) return element.name}).filter(element => element != undefined);
};
console.log(manyCandies(students));

function avarageCandies(list:studentList[]):any{
  return list.map(element => element.candies).reduce((a,b) => a + b, 0) / list.length;
};
console.log(avarageCandies(students));

export {};
