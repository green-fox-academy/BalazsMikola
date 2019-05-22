'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.post('/arrays', (req, res) => {
  let math = req.body.what;
  let numbers = req.body.numbers;
  let result;
  if(math === 'sum'){
    result = numbers.reduce((partial_sum, element) => partial_sum + element,0);
  }else if(math === 'multiply'){
    result = numbers.reduce((partial_sum, element) => partial_sum * element,1);
  }else if(math === 'double'){
    result = numbers.map(element => element*2);
  };
  res.send({'result':result});

});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));