var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'xinyue'
});

//高能Hi聊
router.get('/hichat', (req, res) => {
  db.query("SELECT * FROM hichat_table", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('database error').end();
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
//点赞
router.post('/dianzan', (req, res) => {
  var str = '';
  req.on('data', function (data) {
    str += data;
    id = JSON.parse(str).id;
    console.log(id);
  });
  req.on('end', function () {
    console.log(id);
    db.query("update comment1_table set agree=agree + 1 WHERE ID = " + id + " ", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database error').end();
      } else {
        console.log(data);
        res.json(data);
      }
    })
  });
})

//高能Hi聊-评论1
router.get('/hichat/comment1', (req, res) => {
  db.query("SELECT * FROM comment1_table", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('database error').end();
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
//评论2
router.get('/hichat/comment2', (req, res) => {
  db.query("SELECT * FROM comment2_table", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('database error').end();
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
//评论3
router.get('/hichat/comment3', (req, res) => {
  db.query("SELECT * FROM comment3_table", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('database error').end();
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;