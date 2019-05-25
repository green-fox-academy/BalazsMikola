'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
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

app.post('/posts', (req, res) => {
  //Timestamp: ALTER TABLE posts MODIFY COLUMN timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
  let user = req.body.user;
  conn.query(`SELECT name FROM users WHERE name = "${user}";`, (err, result) => {
    if (err || result.length===0) {
      res.json({'error':'Please log-in or sing-up'})
      return;
    }else{
      conn.query(`INSERT INTO posts (title, url, owner) VALUES (?, ?, ?);`, [req.body.title, req.body.url, user], (err, result) => {
        if (err) {
          res.json(err.toString());
          return;
        }else{
            conn.query(`SELECT * FROM posts WHERE owner = "${user}" AND id=(SELECT max(id) FROM posts)`, (err, result) => {
            if (err) {
              res.json(err.toString());
              return;
            }else{
              res.json(result);
              return;
            };
          });
        };
      });
    };
    console.log('data successfully requested from DB');
    return;
  });
});

app.get('/posts', (req, res) => {
  
  conn.query(`SELECT * FROM posts`, (err, result) => {
    if (err) {
      res.json(err.toString());
      return;
    }else {
      //res.status(200).send('OK!');
      res.json(result);
    };
  });
});

app.delete('/posts', (req, res) => {
  
  let id = req.query.id;

  conn.query(`SELECT * FROM posts WHERE id = ${id}`, (err, result) => {
    if (err) {
      res.json(err.toString());
      return;
    }else { 
      conn.query(`DELETE FROM posts WHERE id = ${id}`, (err, result2) => {
      if (err) {
        res.json(err.toString());
        return;
      }else {
        res.json(result);
      }
      });
    };
  });
});

app.listen(PORT, () => {console.log(`Server is up and running on port ${PORT} 🔥`);});
