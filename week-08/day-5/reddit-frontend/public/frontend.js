'use strict';
/*
let postContainerDiv = document.querySelector('.postContainer');
let rateDiv = document.querySelector('.rate');
let titleDiv = document.querySelector('.title');
let timeAndUserDiv = document.querySelector('.timeAndUser');
let links = document.querySelector('.links');
*/
const fillTable = (posts) => {
  for(let i=0; i<posts.length; i++){
    document.querySelector('.postContainer').appendChild(document.createElement('div')).setAttribute('class','onePost');
    document.querySelectorAll('.onePost')[i].appendChild(document.createElement('div')).setAttribute('class','rate');
    document.querySelectorAll('.onePost')[i].appendChild(document.createElement('div')).setAttribute('class','content');
    document.querySelectorAll('.content')[i].appendChild(document.createElement('div')).setAttribute('class','title');
    document.querySelectorAll('.content')[i].appendChild(document.createElement('div')).setAttribute('class','timeAndUser');
    document.querySelectorAll('.content')[i].appendChild(document.createElement('div')).setAttribute('class','links');
    document.querySelectorAll('.rate')[i].innerHTML = posts[i].score;
    document.querySelectorAll('.title')[i].innerHTML = posts[i].title;
    document.querySelectorAll('.timeAndUser')[i].innerHTML = `submitted ${posts[i].timestamp} by ${posts[i].owner}`;
    document.querySelectorAll('.links')[i].innerHTML = `<a href="">Modify</a><a href="">Remove</a>`;
  };
};

function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/posts');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = data => {
    fillTable(JSON.parse(data.target.response));
  };
  xhr.send();
};
getPosts();