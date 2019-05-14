'use strict';

const numbersAndStrings:{[i:number]:string} = {
  1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',11:'eleven',
  12:'twelve',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',18:'eighteen',19:'nineteen',
  20:'twenty',30:'thirty',40:'forty',50:'fifty',60:'sixty',70:'seventy',80:'eighty',90:'ninety',100:'hundred',1000:'thousand'
};

function numberConverter(num:number){

  if(numbersAndStrings.hasOwnProperty(num)){
    return numbersAndStrings[num];
  }else{
    
    let ten:string = '';
    
    if(num.toString().length === 2){
      return numbersAndStrings[num.toString()[0]+'0'] + numbersAndStrings[num.toString()[1]];
    };
    
    if(num.toString().length === 3){
      let handred:string = numbersAndStrings[num.toString()[0]] + ' hundred and ';
      if(numbersAndStrings[num.toString()[1] + num.toString()[2]]){
        ten = numbersAndStrings[num.toString()[1] + num.toString()[2]];
      }else if(num.toString()[1] === '0'){
        ten = numbersAndStrings[num.toString()[2]];
      }else{
        ten = numbersAndStrings[num.toString()[1]+'0'] + numbersAndStrings[num.toString()[2]];
      };
      return handred + ten;
    };
  };
  
};
console.log(numberConverter(817));
