/*Create an empty map where the keys are integers and the values are characters
Print out whether the map is empty or not
Add the following key-value pairs to the map
Key	Value
97	a
98	b
99	c
65	A
66	B
67	C
Print all the keys
Print all the values
Add value D with the key 68
Print how many key-value pairs are in the map
Print the value that is associated with key 99
Remove the key-value pair where with key 97
Print whether there is an associated value with key 100 or not
Remove all the key-value pairs*/

let myObj:any = {};
Object.keys(myObj).length === 0 ? console.log(`The map is empty`) : console.log(`The map is not empty`);
myObj[97] = "a";
myObj[98] = "b";
myObj[99] = "c";
myObj[65] = "A";
myObj[66] = "B";
myObj[67] = "C";
console.log(Object.keys(myObj));
console.log(Object.values(myObj));
myObj[68] = "D";
console.log(Object.keys(myObj).length);
console.log(myObj[99]);
delete myObj[97];
!myObj[100] ? console.log(`There is no key:100`) : console.log(`There is key:100`);
myObj = {};
console.log(myObj);
