'use strict';
// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

function decryptFile(source:string):string{
  try {
    let fileContent = fs.readFileSync(source, 'utf-8').split('\r\n');
    for(let i:number=0; i<fileContent.length; i++){
      fileContent[i] = fileContent[i].split('').reverse().join('') + '\r\n';
    };
    return(fileContent.join(''));
  }
  catch(err){
    return('Unable to read file: '+ err.path);
  };
};
console.log(decryptFile('reversed-lines.txt'));
