'use strict';

const httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://localhost:3000/alltitles');

httpRequest.onload = (data) => { 
  
  let titles = JSON.parse(data.target.response);
  
  for (let i=0; i<titles.length; i++){
    document.getElementsByTagName('ul')[0].appendChild(document.createElement('li')).innerText = titles[i].book_name;  
  };

};
httpRequest.send(null);
