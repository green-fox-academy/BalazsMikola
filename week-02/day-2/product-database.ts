/*We are going to represent our products in a map where the keys are 
strings representing the product's name and the values are numbers representing the product's price.
Create a map with the following key-value pairs.
Product name (key)	Price (value)
Eggs	200
Milk	200
Fish	400
Apples	150
Bread	50
Chicken	550
Create an application which solves the following problems.
How much is the fish?
What is the most expensive product?
What is the average price?
How many products' price is below 300?
Is there anything we can buy for exactly 125?
What is the cheapest product?*/

'use strict';

const database: {[i:string]:number} = {
  'Eggs':200,
  'Milk':200,
  'Fish':400,
  'Apples':150,
  'Bread':50,
  'Chicken':550
};

function workingWithDatabase(map:{[i:string]:number}):void{
  
  console.log(`The fish costs: ${map['Fish']}`);

  Object.keys(map).forEach(element => 
    map[element] === Math.max(...Object.values(map)) ? 
    console.log(`The most expensive product is ${element} and the price is ${map[element]}`) : undefined
  );

  let average:number = 0;
  let arrayForPrices = Object.values(map);
  for (let i:number=0; i<arrayForPrices.length; i++){
    average = average + arrayForPrices[i];
  }
  console.log(`The average price is: ${average/arrayForPrices.length}`);

  let below300:number = 0;
  for (let i:number=0; i<arrayForPrices.length; i++){
    arrayForPrices[i]<300 ? below300++ : undefined;
  }
  console.log(below300 + ' products are below 300');
  
  arrayForPrices.indexOf(125)!== -1 ? console.log(`Yes, there is a product for 125`) : console.log(`No, there is nothing for 125`);
  console.log(`The cheapest product is `);

  Object.keys(map).forEach(element => 
  map[element] === Math.min(...Object.values(map)) ? 
  console.log(`The cheapest product is ${element} and the price is ${map[element]}`) : undefined
  );
}

workingWithDatabase(database);
