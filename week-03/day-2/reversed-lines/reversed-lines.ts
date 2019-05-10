'use strict';
// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

function decryptFile(source:string){
  try {
    let fileContent = fs.readFileSync(source, 'utf-8');
    console.log(fileContent);
  }
  catch(err){
    console.log('Unable to read file: '+ err.path);
  }
};
console.log(decryptFile('reversed-lines.txt'));
