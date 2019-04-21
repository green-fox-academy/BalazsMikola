/*
Create an application which solves the following problems.
Which products cost less than 201? (just the name)
Which products cost more than 150? (name + price)
*/

'use strict';
export {database};

const database: {[i:string]:number} = {
  'Eggs':200,
  'Milk':200,
  'Fish':400,
  'Apples':150,
  'Bread':50,
  'Chicken':550
};

function workingWithDatabase(map:{[i:string]:number}):void{

  let result1:string[] = [];
  let result2:string[] = [];

  Object.keys(map).forEach(element => {
    map[element] < 201 ? result1.push(element) : undefined;
    map[element] > 150 ? result2.push(element) : undefined
  }
  );
  console.log(`The products with price less than 201: ${result1} `);
  console.log(`The products with price more than 150: ${result2} `);
}

workingWithDatabase(database);
