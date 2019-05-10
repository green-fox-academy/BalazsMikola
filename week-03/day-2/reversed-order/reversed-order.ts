'use strict';
// Create a method that decrypts reversed-order.txt

const fs = require('fs');

function decryptFile(source:string):string{
  try {
    let fileContent = fs.readFileSync(source, 'utf-8').split('\r\n').reverse();
    for(let i:number=0; i<fileContent.length; i++){
      fileContent[i] += '\r\n';
    };
    return fileContent.join('') ;
  }
  catch(err){
    return('Unable to read file: '+ err.path);
  };
};
console.log(decryptFile('reversed-order.txt'));

export {};
