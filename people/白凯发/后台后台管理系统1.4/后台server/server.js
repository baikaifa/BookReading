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
    app.post('/api/upload_file', function (req, res){
        //新文件名
        //'./www/upload/dfb33662df86c75cf4ea8197f9d419f9' + '.png'
        var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
      
        fs.rename(req.files[0].path, newName, function (err){
          if(err)
            res.send('上传失败');
          else
            res.send('成功');
        });
      
        //1.获取原始文件扩展名
        //2.重命名临时文件
      });
    // app.use(express.static(path.join(__dirname, 'public'))); //设置静态文件目录
    // app.use(express.static(__dirname + "/public", {
    //     index: "login.html"
    // })); //默认显示login.html
    // app.get('/登录页.html', function (req, res) {
    //     console.log('提供静态文件');
    //     console.log(__dirname);
    //     res.sendFile(__dirname + "/" + 登录页.html); //提供静态文件
    // })
    //下面允许跨域
    app.all('*', function (req, res, next) { //在被请求的Response header中加入
        res.header("Access-Control-Allow-Origin", "*"); //指定允许其他域名访问
        res.header("Access-Control-Allow-Headers", "X-Requested-With"); //响应头设置
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); //响应方法设置
        res.header("X-Powered-By", ' 3.2.1') //告知网站是用何种语言或框架编写的
        res.header("Content-Type", "application/json;charset=utf-8"); //以json传输数据
        next();
    });
    //查询管理员
app.get('/admin_get', urlencodedParser, function (req, res) { //get
    admin_table(req, res);
});
//删除管理员
app.post('/del_admin', urlencodedParser, function (req, res) { //post处理方法
    console.log( req.body.id,res);
    del_admin(req.body.id); //数据库方法，加入了两个参数，是提交的数据
    res.send('1');
    res.end();
})
//添加管理员
app.post('/make_admin', urlencodedParser, function (req, res) { //post处理方法
    make_admin(req.body.tel,req.body.password,res);
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
    app.post('/query_post', urlencodedParser, function (req, res) { //post处理方法
        query_table(req.body.author, req.body.which_table, req.body.book_name, res);
    });
    app.post('/process_post', urlencodedParser, function (req, res) { //post处理方法
        mysql_connec(req.body.first_which_table, req.body.pic_srcs, req.body.names, req.body.authors, req.body.passwords); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })
    app.post('/del_post', urlencodedParser, function (req, res) { //post处理方法
        del_table(req.body.which_table, req.body.id); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })
    app.post('/del_member', urlencodedParser, function (req, res) { //post处理方法
        del_member(req.body.id); //数据库方法，加入了两个参数，是提交的数据
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
    
    var server = app.listen(8888, function () { //监听
        var host = server.address().address
        var port = server.address().port
        console.log("应用实例，访问地址为 http://%s:%s", host, port)
    })
    app.post('/yiqiyong', urlencodedParser, function (req, res) { //post处理方法
        yiqiyong_table(req.body.id,req.body.state,res); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })
    app.post('/make_user', urlencodedParser, function (req, res) { //post处理方法
        make_user(req.body.tel,req.body.password,res);
    });
    app.get('/query_number', urlencodedParser, function (req, res) { //get
        query_number_user_table(req, res);
    });
    app.post('/search', urlencodedParser, function (req, res) { //get
        search_user_table(req.body.tel, res);
    });
    app.get('/books_get', urlencodedParser, function (req, res) { //get
        books_table(req, res);
    });

app.post('/del_book', urlencodedParser, function (req, res) { //post处理方法
        console.log( req.body.id,res);
        del_book(req.body.id); //数据库方法，加入了两个参数，是提交的数据
        res.send('1');
        res.end();
    })

app.post('/make_book', urlencodedParser, function (req, res) { //post处理方法
        make_book(req.body.title,req.body.author,res);
    });
}

//查找图书
function books_table(req, res) {
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "SELECT * FROM  books_table  ";
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

//删除图书
function del_book(id,res) {
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
    var delSql = "DELETE FROM  books_table  WHERE ID = '" + id + "'"; //存放数据库语言的，这里是添加
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

//添加图书
function make_book(title,author, res) {
    console.log(title,author);
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "insert into books_table(title,author) values('" + title + "','" + author + "')  ";
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
//搜索用户
function search_user_table(tel, res) {
    console.log('post');
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "select * from user_table where tel like '%" +tel +"%' ";
    connection.query(querySql, function (err, result) {
        if (err) {
            console.log("[query error]-", err.message);
            return;
        } else {
            // console.log(JSON.parse(JSON.stringify(result)));
            var ret=JSON.parse(JSON.stringify(result))
            //  var ret=String(JSON.parse(JSON.stringify(result)))
             console.log(ret);
             res.send(ret);
            res.end()
        }
    })
}
//查询数据条数
function query_number_user_table(req, res) {
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "select count(*) from user_table   ";
    connection.query(querySql, function (err, result) {
        if (err) {
            console.log("[query error]-", err.message);
            return;
        } else {
            console.log(JSON.parse(JSON.stringify(result))[0]['count(*)']);
            var ret=String(JSON.parse(JSON.stringify(result))[0]['count(*)'])
            res.send(ret);
            res.end()
        }
    })
}
//添加人员
function make_user(tel,password, res) {
    var mysql = require("mysql");
    var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'xinyue'
    })
    connection.connect(); //连接
    var querySql = "insert into user_table(tel,PASSWORD) values(" + tel + "," + password + ")  ";
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
//更新状态
function yiqiyong_table(id,state,res) {
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
    //判断数据是已启用还是已停用
console.log(state);
    if(state=='已启用'){
        var delSql = "UPDATE  user_table  set state = '已停用' where ID = "+id+" and state ='已启用'"; //存放数据库语言的，这里是添加
        connection.query(delSql, function (err, res) {
            if (err) {
                console.log("[delete error]-", err.message);
                return;
            }
            //cmd打印内容
        })
    }else{//数据是已停用
        var delSql = "UPDATE  user_table  set state = '已启用' where ID = "+id+" and state ='已停用'"; //存放数据库语言的，这里是添加
        connection.query(delSql, function (err, res) {
            if (err) {
                console.log("[delete error]-", err.message);
                return;
            }
        })
    }
   
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
                console.log('21321');
                res.send('1')
            } else {
                res.send('0')
            }
        } else {
            res.send('0')
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

    })

}