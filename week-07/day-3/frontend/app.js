'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let answer = {};

  if (input){
    answer.received = input*1;
    answer.result = input*2;
  }else answer.error = 'Please provide an input!';
  
  res.send(answer);

});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let answer = {};
  if(!name && !title) answer.error = 'Please provide a name and title';
  if(name && !title) answer.welcome_message = 'Please provide a title';
  if(name && title) answer.welcome_message = `Oh, hi there ${name}, my dear ${title}!`;
  res.send(answer);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));