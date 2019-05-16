'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  let value = req.query.name;
  if(!value){
    value = 'Guest';
  }
  res.render('home', {title: `Welcome back, ${value}`});

});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
