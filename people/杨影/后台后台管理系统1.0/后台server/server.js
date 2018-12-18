//表單提價 
from_submit(); //为了方便管理我用函数包起来调用
//表單提價 
function from_submit() {

    var express = require('express'); //调用模板
    var app = express(); //不污染本来，用变量来表示
    var bodyParser = require('body-parser'); //调用模板
    const multer = require('multer');
    const fs = require('fs');
    const pathLib = require('path');
    var objMulter = multer({
        dest: './www/upload/'
    });
    //创建编码解析
    var urlencodedParser = bodyParser.urlencoded({
        extended: false
    })
    app.use(objMulter.any());
    // app.use(express.static(path.join(__dirname, 'public'))); //设置静态文件目录
    app.use(express.static(__dirname + "/public", {
        index: "login.html"
    })); //默认显示login.html
    app.get('/login.html', function (req, res) {
        console.log('提供静态文件');
        res.sendFile(__dirname + "/" + login.html); //提供静态文件
    })
    //下面允许跨域
    app.all('*', function (req, res, next) { //在被请求的Response header中加入
        res.header("Access-Control-Allow-Origin", "*"); //指定允许其他域名访问
        res.header("Access-Control-Allow-Headers", "X-Requested-With"); //响应头设置
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); //响应方法设置
        res.header("X-Powered-By", ' 3.2.1') //告知网站是用何种语言或框架编写的
        res.header("Content-Type", "application/json;charset=utf-8"); //以json传输数据
        next();
    });
    app.post('/api', function (req, res) {
        //新文件名
        //'./www/upload/dfb33662df86c75cf4ea8197f9d419f9' + '.png'
        var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
        fs.rename(req.files[0].path, newName, function (err) {
            if (err)
                res.send('上传失败');
            else
                res.send('成功');
        });
        //1.获取原始文件扩展名
        //2.重命名临时文件
    });
    app.get('/user_get', urlencodedParser, function (req, res) { //get
        user_table(req, res);
    });
    app.get('/admin_get', urlencodedParser, function (req, res) { //get
        admin_table(req, res);
    });
    app.post('/query_post', urlencodedParser, function (req, res) { //post处理方法
        query_table(req.body.author, req.body.which_table, req.body.book_name, res);
    });
    app.post('/process_post', urlencodedParser, function (req, res) { //post处理方法
        mysql_connec(req.body.first_which_table, req.body.pic_srcs, req.body.names, req.body.authors, req.body.passwords); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })
    app.post('/del_post', urlencodedParser, function (req, res) { //post处理方法
        console.log(req.body.which_table, req.body.id);
        del_table(req.body.which_table, req.body.id); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })
    app.post('/del_member', urlencodedParser, function (req, res) { //post处理方法
        console.log( req.body.id,res);
        del_member(req.body.id); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })
    app.post('/del_admin', urlencodedParser, function (req, res) { //post处理方法
        console.log( req.body.id,res);
        del_admin(req.body.id); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })
    app.post('/process_update', urlencodedParser, function (req, res) { //post处理方法
        update_table(req.body.id, req.body.first_which_table, req.body.pic_srcs, req.body.names, req.body.authors); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })

    app.post('/login', urlencodedParser, function (req, res) { //post处理方法
        query_manager_table(req.body.username, req.body.password, res);
    });
    app.post('/changeState', urlencodedParser, function (req, res) { //post处理方法
        query_changeState_table(req.body.id,req.body.state,res);
    });
    app.post('/make_admin', urlencodedParser, function (req, res) { //post处理方法
        make_admin(req.body.tel,req.body.password,res);
    });
    var server = app.listen(8888, function () { //监听
        var host = server.address().address
        var port = server.address().port
        console.log("应用实例，访问地址为 http://%s:%s", host, port)
    })
}
//添加管理员
function make_admin(tel,password, res) {
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "insert into admin_table(username,PASSWORD) values(" + tel + "," + password + ")  ";
    connection.query(querySql, function (err, result) {
        if (err) {
            console.log("[query error]-", err.message);
            return;
        } else {
            // console.log(result);
            res.send('1');
            res.end()
        }
    })
}
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
//改变状态
function query_changeState_table(id,res){
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "update user_table  set state = 0 when state else set state = 1 where ID = "+id+"";
    connection.query(querySql, function (err, result) {
        if (err) {
            console.log("[query error]-", err.message);
            return;
        } else {
            res.send(result);
            //cmd打印内容
            console.log("\n\n----------更新-----------------------\n");
            console.log(result);
            console.log("\n----------更新数据ENDENDNEDNED-----------");
            res.end()
        }
    })
}



function admin_table(req, res) {
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "SELECT * FROM  admin_table  ";
    connection.query(querySql, function (err, result) {
        if (err) {
            console.log("[query error]-", err.message);
            return;
        } else {
            // console.log(result);
            res.send(result);
            //cmd打印内容
            console.log("\n\n----------查询-----------------------\n");
            console.log(result);
            console.log("\n----------查询数据ENDENDNEDNED-----------");
            res.end()
        }
    })
}
//查询人员
function user_table(req, res) {
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "SELECT * FROM  user_table  ";
    connection.query(querySql, function (err, result) {
        if (err) {
            console.log("[query error]-", err.message);
            return;
        } else {
            // console.log(result);
            res.send(result);
            //cmd打印内容
            console.log("\n\n----------查询-----------------------\n");
            console.log(result);
            console.log("\n----------查询数据ENDENDNEDNED-----------");
            res.end()
        }
    })
}
//查询管理员
function query_manager_table(username, password, res) {
    //连接数据库
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "SELECT * FROM  admin_table  WHERE USERNAME = '" + username + "' "; //存放数据库语言的，这里是添加
    connection.query(querySql, function (err, result) {
        if (err) {
            console.log("[query error]-", err.message);
            return;
        }
        // console.log(result);
        // console.log(result != '');
        if (result != '') {
            judge_password = String(JSON.parse(JSON.stringify(result))[0].password);
            if (judge_password == password) {
                res.send('1')
            } else {
                res.send('0')
            }
        } else {
            res.send('0')
            //cmd打印内容
            console.log("\n\n----------查询-----------------------\n");
            console.log(result);
            console.log("\n----------查询数据ENDENDNEDNED-----------");
            res.end()
        }
    })
}
//更新数据
function update_table(id, first_which_table, pic_src, name, author) {
    //连接数据库
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var addSql = "update " + first_which_table + " set pic_src='" + pic_src + "'  , name='" + name + "',author='" + author + "' where id=" + id + ""; //存放数据库语言的，这里是添加
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
}
//删除管理员
function del_admin(id,res) {
    console.log(id);
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
    var delSql = "DELETE FROM  admin_table  WHERE ID = '" + id + "'"; //存放数据库语言的，这里是添加
    connection.query(delSql, function (err, res) {
        if (err) {
            console.log("[delete error]-", err.message);
            return;
        }
        //cmd打印内容
        console.log("\n\n----------删除-----------------------\n");
        console.log(res);
        console.log("\n----------删除用户ENDENDNEDNED-----------");
    })
}
//刪除用户
function del_member(id,res) {
    console.log(id);
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
    var delSql = "DELETE FROM  user_table  WHERE ID = '" + id + "'"; //存放数据库语言的，这里是添加
    connection.query(delSql, function (err, res) {
        if (err) {
            console.log("[delete error]-", err.message);
            return;
        }
        //cmd打印内容
        console.log("\n\n----------删除-----------------------\n");
        console.log(res);
        console.log("\n----------删除用户ENDENDNEDNED-----------");
    })
}
//刪除数据
function del_table(which_table, id) {
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
    var delSql = "DELETE FROM  " + which_table + "  WHERE ID = '" + id + "'"; //存放数据库语言的，这里是添加
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
//查询数据
function query_table(author, which_table, book_name, res) {
    //连接数据库
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "SELECT * FROM  " + which_table + "  WHERE NAME = '" + book_name + "' OR AUTHOR = '" + author + "' "; //存放数据库语言的，这里是添加
    connection.query(querySql, function (err, result) {
        if (err) {
            console.log("[query error]-", err.message);
            return;
        }
        // console.log(result);
        // console.log(result != '');
        if (result != '') {
            id = String(JSON.parse(JSON.stringify(result))[0].ID);
            res.send(id)
        } else {
            //cmd打印内容
            console.log("\n\n----------查询-----------------------\n");
            console.log(result);
            console.log("\n----------查询数据ENDENDNEDNED-----------");
            res.end()
        }
    })
}
//增加数据
function mysql_connec(first_which_table, pic_src, name, author) {
    //连接数据库
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var addSql = "insert into " + first_which_table + "(pic_src,name,author) values('" + pic_src + "','" + name + "','" + author + "')"; //存放数据库语言的，这里是添加
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
  
}