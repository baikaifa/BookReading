var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'xinyue'
});
//书城-精选-轮播
router.get('/books/carousel', (req, res)=>{
  db.query("SELECT * FROM books_carousel_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
//书城-女生-轮播
router.get('/girls/carousel', (req, res)=>{
  db.query("SELECT * FROM girls_carousel_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end(); 
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
//书城-男生-轮播
router.get('/boys/carousel', (req, res)=>{
  db.query("SELECT * FROM boys_carousel_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
//书城-漫画-轮播
router.get('/mans/carousel', (req, res)=>{
  db.query("SELECT * FROM comic_carousel_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
//原创-推荐-轮播
router.get('/original/carousel', (req, res)=>{
  db.query("SELECT * FROM original_carousel_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
//书城-完结-轮播
router.get('/wanjie/carousel', (req, res)=>{
  db.query("SELECT * FROM wanjie_carousel_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
//书城-出版-轮播
router.get('/chuban/carousel', (req, res)=>{
  db.query("SELECT * FROM chuban_carousel_table", (err, data)=>{
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