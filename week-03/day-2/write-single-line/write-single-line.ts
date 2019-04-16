// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

'use strict';

const fs = require('fs');

function writeFile(content:string, fileName:string):string{
  try{
    fs.writeFileSync(fileName, content);
    return `Successful write, content of the file: ${fs.readFileSync('my-file.txt', 'utf-8')}`;
  }
  catch(err){
    return 'Unable to write file: '+ err.path;
  }
}
console.log(writeFile('Balazs Mikola', 'my-file.txt'));
