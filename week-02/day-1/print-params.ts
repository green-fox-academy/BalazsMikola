// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

let myName:string = 'Balazs Mikola';
let petName:string = "dog";
let myAge:number = 32;
let havePet:boolean = false;

function printParams(name:string, pet:string, age:number, bool:boolean):string {
    if(!bool) {return `My name is ${name} and i have no pet. My age is ${myAge}.`;}
    else {return `My name is ${name} and i have a ${pet}. My age is ${myAge}.`;}
};
console.log(printParams(myName,petName,myAge,havePet));


