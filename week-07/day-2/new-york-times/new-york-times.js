'use strict';

const httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo%2011%20moon%20landing&api-key=7WL3pkIAjDGPf6QEA5DNKJMgFloIXPdR');
let data = "";
httpRequest.onload = () => { 
  data = JSON.parse(httpRequest.responseText);
  
  for(let i=0; i<data.response.docs.length; i++){

    let wrapper = document.getElementsByClassName('wrapper')[0];
    wrapper.appendChild(document.createElement('div')).innerHTML = `<h2>${data.response.docs[i].headline.main}</h2>`;
    wrapper.appendChild(document.createElement('div')).innerHTML = `<p>${data.response.docs[i].snippet}</p>`;
    wrapper.appendChild(document.createElement('div')).innerHTML = `<p>${data.response.docs[i].pub_date}</p>`;
  };
};
httpRequest.send(null);
