'use strict';
// Create a method that decrypts encoded-lines.txt

const fs = require('fs');

function decryptFile(source:string):string{
  try {
    let fileContent = fs.readFileSync(source, 'utf-8').split('\r\n');
    let result:string = '';
    for(let i:number=0; i<fileContent.length; i++){
      result += (fileContent[i].split('').map(
        element => {if(element.charCodeAt(0) != 32)  return String.fromCharCode((element.charCodeAt(0))-1); else return ' ';}
        )).join('')+'\r\n';
    };
    return result;
  }
  catch(err){
    return('Unable to read file: '+ err.path);
  };
};
console.log(decryptFile('encoded-lines.txt'));

export {};