const express=require('express');
const cookieParser=require('cookie-parser');
const static=require('express-static');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const consolidate=require('consolidate');
const mysql=require('mysql');

//连接池
const db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'xinyue'});

var app=express();
// app.listen(3000);

//1.解析cookie
app.use(cookieParser('sdfasl43kjoifguokn4lkhoifo4k3'));

//2.使用session
var arr=[];
for(var i=0;i<100000;i++){
  arr.push('keys_'+Math.random());
}
app.use(cookieSession({name: 'zns_sess_id', keys: arr, maxAge: 20*3600*1000}));

//3.post数据
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: './www/upload'}).any());
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
      // res.render('index.ejs', {banners: data});
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