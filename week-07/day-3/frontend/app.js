'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));