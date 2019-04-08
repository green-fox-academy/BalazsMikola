// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element

let r:number[] = [54, 23, 66, 12];

function sum(element1:number, element2:number):number {
    return r[element1-1] + r[element2-1];

}
console.log(`The sum of two elements form the array is ${sum(2,3)}`);