// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:string[] = ["Arthur", "Boe", "Chloe"];

let firstElement:string =abc.shift();
let secondElement:string =abc.pop();

abc.push(firstElement);
abc.unshift(secondElement);
console.log(abc);