
'use strict';

let url = 'http://api.icndb.com/jokes/random';
const button = document.querySelector('button');
const div = document.querySelector('div');

const getJoke = () => {
  fetch('http://api.icndb.com/jokes/random')
    .then(response => {return response.json()})
    .then(response => div.innerHTML += response.value.joke + '<br>')
    .catch(error =>  {div.innerHTML += 'no joke for today because an error occurred: ' + error});
}
button.addEventListener('click', getJoke);
