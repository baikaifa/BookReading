var express = require('express');
var router = express.Router();
const mysql=require('mysql');
const db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'xinyue'});
//产生随机数
function suijishu() {
  var random_range = 9999;

  function make_number(random_range) {
    random_number = parseInt(random_range * Math.random());
    return random_number;
  }
  random_number = make_number(random_range);
  return random_number = random_number.toString();
  //返回字符串random_number
}
//产生随机数结束

router.post('/sendCode', function (req, res) {
  var success = true;
  code = suijishu(); //不使用var就可以声明为全局变量
  var message = "短信已发送到您的手机请注意查收"
  var str = '';
  req.on('data', function (data) {
    str += data;
  });
  req.on('end', function () {
    console.log(str);
    var ret = {
      'success': success,
      'code': code,
      'message': message
    };
    res.send(ret);
  });
});
router.post('/validateCode', function (req, res) {
  var str = '';
  req.on('data', function (data) {
    str += data;
  });
  req.on('end', function () {
    str = JSON.parse(str).code; //获取前台发的验证码 string类型
    console.log(code); //后台产生的验证码
    if (str == code) {
      var ret = {
        'success': true,
        'message': "验证成功"
      };
      res.send(ret);
    } else {
      var ret = {
        'success': false,
        'message': '验证失败'
      };
      res.send(ret);
    }
  })

})


router.post('/register', function (req, res) {
  var str = '';
  req.on('data', function (data) {
    str += data;
  });
  req.on('end', function () {

    var tel = JSON.parse(str).tel;
  tel=parseInt(tel)
  console.log(typeof tel);
    var password = JSON.parse(str).password;
    // db.query("INSERT INTO user_table(tel,password) VALUES(15345664,'password')", (err, data) => {
      db.query("INSERT INTO user_table(tel,password) VALUES('" + tel + "','" + password + "')", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database error').end();
      } else {
        console.log(data);
        var ret = {
          'success': true,
          'message': "注册成功"
        };
        res.send(ret);
      }
    })
  })

})
module.exports = router;
