/*
Create a list ('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list ('List B') with the values of List A
*/
'use strict'

const listA:string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
const listB:string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//Print out whether List A contains Durian or not
listA.indexOf('Durian') != -1 ? console.log(`Yes, 'Durian' is in the list`) : 
console.log(`No, 'Durian' is not in the list`);

//Remove Durian from List B
listB.splice(listA.indexOf('Durian'),1);

//Add Kiwifruit to List A after the 4th element
listA.splice(4,0, 'Kiwifruit');

//Compare the size of List A and List B
listA.length > listB.length ? console.log(`listA is longer than listB`) :
console.log(`listB is longer than listA`);

//Get the index of Avocado from List A
console.log(`The index of Avocado is ${listA.indexOf('Avocado')}`);

//Get the index of Durian from List B
console.log(`The index of Durian is ${listB.indexOf('Durian')} because it has beeen removed`);

//Add Passion Fruit and Pummelo to List B in a single statement
listB.push('Passion Fruit','Pummelo');
console.log(listB);

//Print out the 3rd element from List A
console.log(`The 3rd element in listA is ${listA[2]}`);
