// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';

const fs = require('fs');

function uniqueIP(sourceFile:string):string[]{
  let database = fs.readFileSync(sourceFile, 'utf-8');
  let lines = database.split('   ');
  let IPs:string[] = [];
  for(let i:number=1; i<=lines.length-1; i+=2){
    IPs.push(lines[i]);
  }
  return Array.from(new Set(IPs));
}
console.log(uniqueIP('log.txt'));


function getPostRatio(sourceFile:string):number{
  let database = fs.readFileSync(sourceFile, 'utf-8');
  let lines = database.split('\r\n');
  let postCounter:number = 0;
  let getCounter:number = 0;

  for(let i:number=0; i<lines.length; i++){
    if(lines[i].indexOf('POST') != -1) postCounter++;
    else getCounter++;
  }
  return getCounter/postCounter;
}
console.log(getPostRatio('log.txt'));
