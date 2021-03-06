const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');

//加载路由模块
var me=require('./routes/me');

//连接数据库
const db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'xinyue'});
var app=express();
//使用路由
app.use('/api',me);
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
//书城-女生
app.get('/api/girls', (req, res)=>{
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
//书城-男生
app.get('/api/boys', (req, res)=>{
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
app.get('/api/mans', (req, res)=>{
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
//书架
app.get('/api/shujia', (req, res)=>{
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
//4.static数据 指定静态资源访问目录 下面为静态文件方法 不可改
app.use(express.static(require('path').join(__dirname, 'public')));
app.listen(3000);

var server = app.listen(3001,"localhost",function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server running at http://%s:%s", host, port)
});

