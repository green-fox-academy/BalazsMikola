'use strict';

const dotenv = require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const table_book_mast = 'book_mast';
const PORT = 3000;
app.use('/static', express.static('static'));
app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
  //if this error: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
  //run: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
});
conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/alltitles', (req, res) => {
  
  conn.query(`SELECT book_name FROM ${table_book_mast};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    };
    console.log('data successfully requested from DB');
    res.send(result);
    //res.json(result);
  });
});
app.listen(PORT, () => {console.log(`Server is up and running on port ${PORT} 🔥`);});