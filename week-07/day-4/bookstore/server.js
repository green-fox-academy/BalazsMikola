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

app.get('/allbooks', (req, res) => {
  
  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ${table_book_mast}
    JOIN category ON book_mast.cate_id = category.cate_id
    JOIN author ON book_mast.aut_id = author.aut_id
    JOIN publisher ON book_mast.pub_id = publisher.pub_id;`, (err, result) => {
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
/*
SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast
    -> JOIN category
    -> ON book_mast.cate_id = category.cate_id
    -> JOIN author
    -> ON book_mast.aut_id = author.aut_id
    -> JOIN publisher
    -> ON book_mast.pub_id = publisher.pub_id;
+-------------------------------------+----------------------+--------------+------------------------------+------------+
| book_name                           | aut_name             | cate_descrip | pub_name                     | book_price |
+-------------------------------------+----------------------+--------------+------------------------------+------------+
| Introduction to Electrodynamics     | William Norton       | Science      | New Harrold Publication      |      85.00 |
| Understanding of Steel Construction | William Maugham      | Technology   | Jex Max Publication          |     105.50 |
| Guide to Networking                 | William Anthony      | Computers    | BPP Publication              |     200.00 |
| Transfer  of Heat and Mass          | S.B.Swaminathan      | Technology   | Ultra Press Inc.             |     250.00 |
| Conceptual Physics                  | Thomas Morgan        | Science      | Summer Night Publication     |     145.00 |
| Fundamentals of Heat                | Thomas Merton        | Science      | Mountain Publication         |     112.00 |
| Advanced 3d Graphics                | Piers Gibson         | Computers    | BPP Publication              |      56.00 |
| Human Anatomy                       | Nikolai Dewey        | Medical      | Summer Night Publication     |      50.50 |
| Mental Health Nursing               | Marquis de Ellis     | Medical      | Pieterson Grp. of Publishers |     145.00 |
| Fundamentals of Thermodynamics      | Joseph Milton        | Technology   | Pieterson Grp. of Publishers |     225.00 |
| The Experimental Analysis of Cat    | John Betjeman Hunter | Nature       | Mountain Publication         |      95.00 |
| The Nature  of World                | Thomas Morgan        | Nature       | Novel Publisher Ltd.         |      88.00 |
| Environment a Sustainable Future    | Evan Hayek           | Nature       | Jex Max Publication          |     100.00 |
| Concepts in Health                  | E. Howard            | Medical      | Ultra Press Inc.             |     180.00 |
| Anatomy & Physiology                | C. J. Wilde          | Medical      | Novel Publisher Ltd.         |     135.00 |
| Networks and Telecommunications     | Butler Andre         | Computers    | New Harrold Publication      |      45.00 |
+-------------------------------------+----------------------+--------------+------------------------------+------------+
*/