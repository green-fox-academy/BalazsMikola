'use strict';

const fillTable = (posts) => {
  for(let i=0; i<posts.length; i++){
    document.querySelector('.postContainer').appendChild(document.createElement('div')).setAttribute('class','onePost');
    document.querySelectorAll('.onePost')[i].appendChild(document.createElement('div')).setAttribute('class','rate');
    document.querySelectorAll('.onePost')[i].appendChild(document.createElement('div')).setAttribute('class','content');
    document.querySelectorAll('.onePost')[i].setAttribute('id',posts[i].id);
    document.querySelectorAll('.content')[i].appendChild(document.createElement('div')).setAttribute('class','title');
    document.querySelectorAll('.content')[i].appendChild(document.createElement('div')).setAttribute('class','timeAndUser');
    document.querySelectorAll('.content')[i].appendChild(document.createElement('div')).setAttribute('class','links');
    document.querySelectorAll('.rate')[i].innerHTML = `<img class="arrow" id="${posts[i].id}/upvote" src="./assets/upvote.png"><p class="score">${posts[i].score}</p><img class="arrow" id="${posts[i].id}/downvote" src="./assets/downvote.png">`;
    document.getElementById(`${posts[i].id}/upvote`).addEventListener('click', vote);
    document.getElementById(`${posts[i].id}/downvote`).addEventListener('click', vote);
    document.querySelectorAll('.title')[i].innerHTML = posts[i].title;
    document.querySelectorAll('.timeAndUser')[i].innerHTML = `submitted ${posts[i].timestamp} by ${posts[i].owner}`;
    document.querySelectorAll('.links')[i].innerHTML = `<a class="modify" href="">Modify</a><a class="remove" href="">Remove</a>`;
    document.querySelectorAll('.remove')[i].addEventListener('click', removePost);
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

const vote = (event) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `http://localhost:3000/posts/${event.target.id}`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = data => {
    let response = JSON.parse(data.target.response)
    if(response.error){
      console.log(response.error);
    }else{
      document.getElementById(event.target.id).parentElement.querySelector('.score').innerText = response[0].score;
      console.log('thanks for your vote');
    } 
  };
  xhr.send(JSON.stringify({
    "user": "peter"
  }));
//console.log(event.target.src);
/*
if(event.target.src === 'http://localhost:3000/assets/upvote.png') {
  event.target.src =  './assets/upvoted.png';
}
if(event.target.src === 'http://localhost:3000/assets/downvote.png') {
  event.target.src =  './assets/downvoted.png';
}
*/
  //event.target.src === './assets/upvote.png' ?  event.target.src =  './assets/upvoted.png': event.target.src =  './assets/downvoted.png';
};

const removePost = (event) => {
  event.preventDefault();
  let id = event.target.parentElement.parentElement.parentElement.id;
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `http://localhost:3000/posts?id=${id}`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = data => {
    console.log(JSON.parse(data.target.response));
    document.querySelector('.postContainer').removeChild(document.getElementById(id));
  };
  xhr.send();
};