'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function countCandies(list:any[]):string{
  let sum:any = 0;
  for(let i:number=0; i<list.length; i++){
    sum += Object.values(list[i])[2];
  };
  return `students have ${sum} candies altogether`;
};

function sumOfAge(list:any[]):string{
  let ages:any = 0;
  for(let i:number=0; i<list.length; i++){
    if(Object.values(list[i])[2] < 5){
      ages += Object.values(list[i])[1];
    };
  };
  return `The sum of the age of people who have less than 5 candies: ${ages}`;
};

console.log(countCandies(students));
console.log(sumOfAge(students));
