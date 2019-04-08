// -  Create a function called `factorio`
//    that returns it's input's factorial

let inputNumber:number = 4;

function factorio(input:number):number {
    let factorial:number = input;
    for(let i=(input-1); i>=1; i--){factorial=factorial*i;}
    return factorial;
}
console.log(factorio(inputNumber));
