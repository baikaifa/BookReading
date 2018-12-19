var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'xinyue'
});

//分类-男生
router.get('/classify/boys', (req, res)=>{
  db.query("SELECT * FROM classify_boys_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
//分类-女生
router.get('/classify/girls', (req, res)=>{
  db.query("SELECT * FROM classify_girls_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
//分类-出版
router.get('/classify/chuban', (req, res)=>{
  db.query("SELECT * FROM classify_chuban_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
//分类-漫画
router.get('/classify/comic', (req, res)=>{
  db.query("SELECT * FROM classify_comic_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
  
module.exports = router;