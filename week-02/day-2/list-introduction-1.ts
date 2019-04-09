/*Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add William to the list
Print out whether the list is empty or not
Add John to the list
Add Amanda to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name
William
John
Amanda
Iterate through the list and print
1. William
2. John
3. Amanda
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements*/

let myArray:string[] = [];
console.log(`The initial array is empty so the number of elements is ${myArray.length}`);
myArray.push("William");
myArray.length === 0 ? console.log(`The Array is empty`) : console.log(`The Array has ${myArray.length} element`);
myArray.push("John", "Amanda");
console.log(`The number of elements now is ${myArray.length}`);
console.log(`The 3rd element is ${myArray[2]}`);
myArray.map(elements => console.log(elements));
for (let i:number=0; i<myArray.length; i++){console.log(i+1+". "+myArray[i]);}
myArray.splice(1,1);
myArray.reverse().map(elements => console.log(elements));
myArray = [];
console.log(`The array is empty so the lenght is ${myArray.length}`);
