const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');

//加载路由模块
var me=require('./routes/me');
var shucheng=require('./routes/shucheng');
var shujia=require('./routes/shujia');
var carousel = require('./routes/carousel');
var original = require('./routes/original');
var hichat = require('./routes/hichat');
var chuban = require('./routes/chuban');
//连接数据库
const db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'xinyue'});
var app=express();
//使用路由
app.use('/api',me);
app.use('/api',shucheng);
app.use('/api',shujia);
app.use('/api',carousel);
app.use('/api',original);
app.use('/api',hichat);
app.use('/api',chuban);
//3.post数据
app.use(bodyParser.urlencoded({extended: false}));

//接收用户请求
app.get('/api', (req, res)=>{
  //查询banner的东西
  db.query("SELECT * FROM books_table", (err, data)=>{
    if(err){
      console.log(err);
      res.status(500).send('database error').end();
    }else{
      console.log(data);
      res.json(data);
    }
  })
});
app.post('/api',(req,res)=>{
  var str='';
  req.on('data', function (data){
    str+=data;
  });
  req.on('end', function (){
    console.log(str);
    res.send('123');
  });
})


//4.static数据 指定静态资源访问目录 下面为静态文件方法 不可改
app.use(express.static(require('path').join(__dirname, 'public')));
app.listen(3000);

var server = app.listen(3001,"localhost",function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server running at http://%s:%s", host, port)
});

