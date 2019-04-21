/*We are going to represent a shopping list in a list containing strings.
Create a list with the following items.
Eggs, milk, fish, apples, bread and chicken
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list?*/

'use strict';

const shoppingList:string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

function checkList(list:string[], items:string[]){

  for(let i:number=0; i<items.length; i++){
    if (list.indexOf(items[i])!== -1) console.log(`Yes we have ${items[i]} on the shopping list`);
    else console.log(`No we have no ${items[i]} on the shopping list`);
  }
}

checkList(shoppingList, ['milk','bananas']);
