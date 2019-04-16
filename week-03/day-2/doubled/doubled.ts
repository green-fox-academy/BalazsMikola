// Create a method that decrypts duplicated-chars.txt

'use strict';

const fs = require('fs');

function decryptduplicated(source:string){
  let cryptedText = fs.readFileSync(source, 'utf-8').replace('\r','');
  let decrypedText:string = '';
  for(let i:number=0; i<=cryptedText.length; i+=2){
    decrypedText =  decrypedText + cryptedText[i];
  }
  console.log(decrypedText);
}
console.log(decryptduplicated('duplicated-chars.txt'));
