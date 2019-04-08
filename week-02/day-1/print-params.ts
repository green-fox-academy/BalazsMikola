// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

let test1:string = 'Im a string';
let test2:number = 32;
let test3:any[] = [32, "string", true];
let test4:boolean = false;

function printParams(anything:any){
    console.log(anything);
}
printParams(test4);


