//表單提價 
from_submit(); //为了方便管理我用函数包起来调用
//表單提價 
function from_submit() {
    var express = require('express'); //调用模板
    var app = express(); //不污染本来，用变量来表示
    var bodyParser = require('body-parser'); //调用模板

    //创建编码解析
    var urlencodedParser = bodyParser.urlencoded({
        extended: false
    })

    app.use(express.static('public')); //设置静态文件目录

    app.get('/index.html', function (req, res) {
        console.log('提供静态文件');
        res.sendFile(__dirname + "/" + form_index.html); //提供静态文件
    })
    //下面允许跨域
    app.all('*', function(req, res, next) {//在被请求的Response header中加入
        res.header("Access-Control-Allow-Origin", "*");//指定允许其他域名访问
        res.header("Access-Control-Allow-Headers", "X-Requested-With");//响应头设置
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//响应方法设置
        res.header("X-Powered-By",' 3.2.1')//告知网站是用何种语言或框架编写的
        res.header("Content-Type", "application/json;charset=utf-8");//以json传输数据
        next();
    });
    app.post('/del_post', urlencodedParser, function (req, res) { //post处理方法
        del_table(req.body.which_table, req.body.book_name, ); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })

    app.post('/process_post', urlencodedParser, function (req, res) { //post处理方法
        mysql_connec(req.body.first_which_table,req.body.pic_srcs, req.body.names, req.body.authors, req.body.passwords); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })

    var server = app.listen(8888, function () { //监听
        var host = server.address().address
        var port = server.address().port
        console.log("应用实例，访问地址为 http://%s:%s", host, port)
    })

}
// 这里因为只需要添加数据于是我就注释了其他方法，这个方法就加载刚才的js里面，这里也是一个方法，添加参数

function del_table(which_table,book_name){
       //连接数据库
       var mysql = require("mysql");
       var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
           host: 'localhost',
           user: 'root',
           password: '123456',
           database: 'xinyue'
       })
       connection.connect(); //连接
       //删除数据
       
       var delSql = "DELETE FROM  "+ which_table +"  WHERE NAME = '"+book_name+"'"; //存放数据库语言的，这里是添加
       connection.query(delSql, function (err, res) {
           if (err) {
               console.log("[delete error]-", err.message);
               return;
           }
           //cmd打印内容
           console.log("\n\n----------删除-----------------------\n");
           console.log(res);
           console.log("\n----------删除数据ENDENDNEDNED-----------");
       })
}
//數據庫鏈接方法
function mysql_connec(first_which_table,pic_src,name,author) {
    //连接数据库
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var addSql = "insert into "+first_which_table+"(pic_src,name,author) values('"+pic_src+"','"+name+"','"+author+"')"; //存放数据库语言的，这里是添加
    console.log(addSql);
    connection.query(addSql, function (err, res) {
        if (err) {
            console.log("[insert error]-", err.message);
            return;
        }
        //cmd打印内容
        console.log("\n\n----------插入數據-----------------------\n");
        console.log(res);
        console.log("\n----------插入數據ENDENDNEDNED-----------");
    })
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
    //更新数据
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