//表單提價 
from_submit();  //为了方便管理我用函数包起来调用
//表單提價 
function from_submit(){
  var express = require('express');  //调用模板
  var app = express();  //不污染本来，用变量来表示
  var bodyParser = require('body-parser');  //调用模板

  //創建編碼解析
  var urlencodedParser = bodyParser.urlencoded({ extended: false })
  
  app.use(express.static('public'));  //设置静态文件目录
  
  app.get('/index.html',function(req,res){
      console.log('提供静态文件');
      res.sendFile(__dirname+"/"+form_index.html); //提供静态文件
  })

  app.post('/process_post', urlencodedParser, function (req, res) {  //post处理方法
         // 输出 JSON 格式
     var response = {
         "names":req.body.names,   //得到页面提交的数据
         "passwords":req.body.passwords
     };
      //加入數據庫
     mysql_connec(req.body.names,req.body.passwords);  //数据库方法，加入了两个参数，是提交的数据
     console.log(response);
        res.send("1"); //返回的数据，这里根据情况写
     res.end();
  })
  var server = app.listen(8888, function () {  //监听
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
  })
  
}
// 这里因为只需要添加数据于是我就注释了其他方法，这个方法就加载刚才的js里面，这里也是一个方法，添加参数


 //數據庫鏈接方法
//mysql_connec();
  
  //數據庫鏈接方法
  function mysql_connec(name,pas) {

    //鏈接數據庫
    var mysql = require("mysql");
    var connection = mysql.createConnection({  //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xmibear'
    })

    connection.connect();  //连接

    //查詢語句
//    var selectSql = "select * from formtable";
//    connection.query(selectSql, function(err, res) {
//        if(err) {
//            console.log('[select error]-', err.message);
//            return;
//        }
//        console.log("\n\n----------查詢語句-----------------------\n");
//        console.log(res);
//        console.log("\n----------查詢語句ENDENDNEDNED-----------");
//
//    })

    //插入數據
    var addSql = "insert into formtable(name,password) values(?,?)"; //存放数据库语言的，这里是添加
    var addParmas = [name, pas];
    connection.query(addSql, addParmas, function(err, res) {
        if(err) {
            console.log("[insert error]-", err.message);
            return;
        }
//cmd打印内容
        console.log("\n\n----------插入數據-----------------------\n");
        console.log(res);
        console.log("\n----------插入數據ENDENDNEDNED-----------");

    })

    //更新數據
//    var upSql = "update formtable set name=?,password=? where id=?";
//    var upParmas = ["劉王婆", "55555", 1];
//    connection.query(upSql, upParmas, function(err, res) {
//        if(err) {
//            console.log("[updata error]-", err.message);
//            return;
//        }
//        console.log("\n\n----------更新數據-----------------------\n");
//        console.log(res);
//        console.log("\n----------更新數據ENDENDNEDNED-----------");
//    })
  }