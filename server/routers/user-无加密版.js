// 这是用户注册和登录的路由

var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

let responseData = null;

router.use(jsonParser, function (req, res, next) {
    responseData = {
        code: 0,
        message: ""
    }
    next()
})

router.post('/register', function (req, res) {
    // console.log(req.body); // 打印注册的数据
    if (req.body.regUsername.trim() == '') {
        responseData.code = 1;
        responseData.message = "用户名不能为空";
        res.json(responseData);
        return;
    }
    if (req.body.regPassword.trim() == '') {
        responseData.code = 2;
        responseData.message = "密码不能为空";
        res.json(responseData);
        return;
    }
    if (req.body.regPassword.trim() !== req.body.checkPassword.trim()) {
        responseData.code = 3;
        responseData.message = "两次密码不一致";
        res.json(responseData);
        return;
    }
    // 查询数据
    db.query(`SELECT username FROM user_table WHERE username='${req.body.regUsername}'`, function (error, results) {
        if (error) throw error;
        console.log(results);
        if (results.length != 0) {
            responseData.code = 4;
            responseData.message = "用户名已经存在";
            res.json(responseData);
            return;
        } else {
            db.query(`INSERT INTO user_table(username,password) VALUES('${req.body.regUsername}', '${req.body.regPassword}')`, (error, result) => {
                if (error) throw error;
                console.log(result);
                responseData.message = "注册成功";
                res.json(responseData);
            })
        }
    });
})


// 定义管理栏目首页路由，处理对login请求
router.post('/login', function (req, res) {
    // console.log(req.body);
    let { logUsername, logPassword } = req.body;

    if (logUsername.trim() == "" || logPassword.trim() == "") {
        responseData.code = 1;
        responseData.message = "用户名和密码不能为空";
        res.json(responseData);
        return;
    }

    db.query(`SELECT username FROM user_table WHERE username="${logUsername}" AND password="${logPassword}"`, function (error, results) {
        if (error) throw error;
        console.log(results);
        if (results.length == 0) {
            responseData.code = 2;
            responseData.message = "用户名或密码错误";
            res.json(responseData);
        } else {
            responseData.message = "登录成功";
            res.json(responseData);
        }
    });
})



module.exports = router