'use strict';

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;
require('dotenv').config();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/api/links', (req, res) => {
  let url = req.body.url;
  let alias = req.body.alias;
  conn.query(`SELECT alias FROM url_alias_table WHERE alias = ?;`, [alias], (err, result) => {
    if (err) {
      res.json(err);
      return;
    }else{
      if(result.length===0){
        let secretCode = Math.floor(Math.random() * 9000);
        conn.query(`INSERT INTO url_alias_table (url, alias, secretCode) VALUES (?, ?, ?);`, [url, alias, secretCode], (err, result) => {
          if (err) {
            res.json(err.toString());
            return;
          }else{
            conn.query(`SELECT * FROM url_alias_table WHERE alias = ?;`, [alias], (err, result) => {
              if (err) {
                res.json(err.toString());
                return;
              }else{
                res.json(result);
                return;
              };
            });
          };
        })  
      }else{
        res.status(400).json('Your alias is already in use!');
      };
    }});
});

app.get('/a/:alias', (req, res) => {
  let alias = req.params.alias;
  conn.query(`SELECT alias FROM url_alias_table WHERE alias = ?;`, [alias], (err, result) => {
    if (err) {
      res.json(err);
      return;
    }else{
      if(result.length!=0){
        conn.query(`UPDATE url_alias_table SET hitCount = hitCount + 1 WHERE alias = ?;`, [alias], (err, result) => {
          if (err) {
            res.json(err);
            return;
          }else{
            conn.query(`SELECT url FROM url_alias_table WHERE alias = ?;`, [alias], (err, result) => {
              if (err) {
                res.json(err);
                return;
              }else{
                res.redirect(result[0].url);     
              };
            })
          };
        })
      }else{
        res.status(404).send();
      };
    }
  });
});

app.get('/api/links', (req, res) => {
  conn.query(`SELECT id, url, alias, hitCount FROM url_alias_table;`, (err, result) => {
    if (err) {
      res.json(err);
      return;
    }else{
      res.json(result);
    }
  })
});

app.delete('/api/links/:id', (req, res) => {
  let id = req.params.id;
  let secretCode = req.body.secretCode;
   if(!secretCode){
     res.status(404).send();
   }else{
    
    conn.query(`SELECT secretCode FROM url_alias_table WHERE id = ?;`, [id], (err, result) => {
      if (err) {
        res.json(err);
        return;
      }else{
        if(secretCode === result[0].secretCode){
          conn.query(`DELETE FROM url_alias_table WHERE id = ? AND secretCode = ?;`, [id, secretCode], (err, result) => {
            if (err) {
              res.json(err);
              return;
            }else{
              res.status(204).send();
            }
          })
        }else{
          res.status(203).send();
        }
      }
    })
   }
});


app.listen(PORT, () => {console.log(`Server is up and running on port ${PORT}`);});