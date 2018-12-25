var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'xinyue'
});

router.get('/bangdan/boys', (req, res)=>{
    db.query("SELECT * FROM bangdan_boys", (err, data)=>{
      if(err){
        console.log(err);
        res.status(500).send('database error').end();
      }else{
        console.log(data);
        res.json(data);
      }
    });
  });
router.get('/bangdan/girls', (req, res)=>{
  db.query("SELECT * FROM bangdan_girls", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  });
});
router.get('/bangdan/chuban', (req, res)=>{
  db.query("SELECT * FROM bangdan_chuban", (err, data)=>{
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
  