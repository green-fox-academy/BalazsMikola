//We have a number of bunnies and each bunny has two big floppy ears. We want to compute the 
//total number of ears across all the bunnies recursively (without loops or multiplication).

'use strict';

function earCount(numberOfBunnies:number):number {
    if(numberOfBunnies < 1) return 0;
    return 2+ earCount(numberOfBunnies-1);
}

console.log(earCount(10));
