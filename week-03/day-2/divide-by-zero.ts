// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
'use-strict';

function divide(num:number):number{
  try{  
    let result:number = 10/num;
    if (num === 0) {
      throw new Error('fail');
    } else {
      return result;
    }
  }
  catch(e){
    console.log(e.message);
  }
}
console.log(divide(0));
