var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'xinyue'
});
//书城-女生
router.get('/girls', (req, res)=>{
    //查询banner的东西
    db.query("SELECT * FROM girls_table", (err, data)=>{
      if(err){
        console.log(err);
        res.status(500).send('database error').end();
  
      }else{
        console.log(data);
        res.json(data);
        // res.render('index.ejs', {banners: data});
      }
    });
  });
    //书城-男生搜搜
    router.post('/search_books', (req, res)=>{
      var str = '';
      req.on('data', function (data) {
        str += data;
         keywords = JSON.parse(str).keywords;
         console.log(keywords);
      });
      req.on('end', function () {
        db.query("select * from boys_table where name like '%" +keywords +"%' ", (err, data)=>{
          if(err){
            console.log(err);
            res.status(500).send('database error').end();
      
          }else{
            console.log(data);
            res.json(data);
          }
        });
      })

     
    });
  //书城-男生
  router.get('/boys', (req, res)=>{
    db.query("SELECT * FROM boys_table", (err, data)=>{
      if(err){
        console.log(err);
        res.status(500).send('database error').end();
  
      }else{
        console.log(data);
        res.json(data);
      }
    });
  });
  //书城-漫画
  router.get('/mans', (req, res)=>{
    db.query("SELECT * FROM comic_table", (err, data)=>{
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
