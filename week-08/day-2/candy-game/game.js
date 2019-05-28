'use strict';

let numberOfCandies = 0;
let numberOfLollipops = 10;
let drawLollipops = '';
let speed = 1000;

const buyLollipops = () => {
  if(numberOfCandies >= 100){
    numberOfLollipops++;
    drawLollipops += '🍭';
    numberOfCandies -= 100;
    document.querySelector('.candies').innerHTML = numberOfCandies;
    document.querySelector('.lollypops').innerHTML = drawLollipops;
  };
};
const buyLollipopsButton = document.querySelector('.buy-lollypops');
buyLollipopsButton.addEventListener('click', buyLollipops);

const createCandies = () => {
  numberOfCandies++;
  document.querySelector('.candies').innerHTML = numberOfCandies;
};
const createCandiesButton = document.querySelector('.create-candies');
createCandiesButton.addEventListener('click', createCandies);

const generateCandies = () => {
  if(numberOfLollipops>=10){
    numberOfCandies +=  Math.floor(numberOfLollipops/10);
    document.querySelector('.candies').innerHTML = numberOfCandies;
    document.querySelector('.speed').innerHTML = Math.round((numberOfLollipops/10)*100) / 100;
  };
};

const candyMachine = () => {
  speed /= 10;
  clearInterval(timer);
  timer =  setInterval(generateCandies, speed);
};

const candyMachineButton = document.querySelector('.candy-machine');
candyMachineButton.addEventListener('click', candyMachine);

let timer = setInterval(generateCandies, speed);