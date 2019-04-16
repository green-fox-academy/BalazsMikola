// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

const fs = require('fs');

function numberOfLines(fileName:string):number {
  try{
    let fileContent = fs.readFileSync(fileName, 'utf-8');
    let arrayForLines = fileContent.split('\r\n');
    return arrayForLines.length;
  }
  catch{
    return 0;
  }
}
console.log(numberOfLines('my-file.txt'));
