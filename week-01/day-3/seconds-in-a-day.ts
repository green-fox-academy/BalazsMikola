'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let secondsInOneDay: number = 86400;
let secondsInGivenMinutes: number = currentMinutes * 60;
let secondsInGivenHours: number = (currentHours * 60) * 60;

let  remainingSeconds: number = secondsInOneDay - (secondsInGivenMinutes + secondsInGivenHours + currentSeconds);
console.log(remainingSeconds);