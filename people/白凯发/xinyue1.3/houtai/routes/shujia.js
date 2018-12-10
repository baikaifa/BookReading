var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'xinyue'
});

//书架
router.get('/api/shujia', (req, res)=>{
    //查询banner的东西
    db.query("SELECT * FROM shujia_table", (err, data)=>{
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
