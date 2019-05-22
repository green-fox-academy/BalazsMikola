'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static('assets'));
app.use(express.json());

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

app.get('/appenda/:word', (req, res) => {
  let appendable = req.params.word
  let answer = {};
  
  if(appendable){
    answer.appended = appendable + 'a';
    res.send(answer);
  }else res.status(404).send();
});

app.post('/dountil/:action', (req, res) => {
  let result = 0;
  if(!req.body.until) res.send({'error': 'Please provide a number!'});
  if(req.params.action === 'sum'){
    for(let i=0; i<=req.body.until; i++){
      result += i;
    };
  }else if(req.params.action === 'factor'){
    result = 1;
    for(let i=1; i<=req.body.until; i++){
      result *= i;
    };
  };
  res.send({'result':result});
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));