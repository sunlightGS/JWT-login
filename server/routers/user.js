// 这是用户注册和登录的路由

var express = require('express')
var router = express.Router()

const db = require('../config/db.js');

// 引入bcryptjs加密模块，用于注册密码时加密
var bcrypt = require('bcryptjs');

// 引入bodyParser模块，用于解析axios注册和登录传过来的json数据
var bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const mySecret = "Life is short, you need front-end1";
const jwt = require('jsonwebtoken');

// 初始化响应数据
let responseData = null;


router.use(jsonParser, function (req, res, next) {
    responseData = {
        code: 0,
        message: ""
    }
    next()
})

// 注册接口
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
            // 使用bcrypt模块将密码加密，自动生成盐和哈希。使用的是同步方法，官网还有异步方法
            var hash = bcrypt.hashSync(req.body.regPassword, 8)
            //将哈希存储在数据库密码字段中。
            db.query(`INSERT INTO user_table(username,password) VALUES('${req.body.regUsername}', '${hash}')`, (error, result) => {
                if (error) throw error;
                // console.log(result); // 打印数据库插入数据的结果
                responseData.code = 0; // 这个0一定要写，否则会继承上一次注册不成功的code值
                responseData.message = "注册成功";
                res.json(responseData);
            })
        }
    });
})



// 登录
router.post('/login', function (req, res) {
    // console.log(req.body); // 打印登录数据
    let { logUsername, logPassword } = req.body;

    // 这里只是简单验证一下用户名和密码是否非空，建议做下更复杂的验证如长度，非数字等
    if (logUsername.trim() == "" || logPassword.trim() == "") {
        responseData.code = 1;
        responseData.message = "用户名和密码不能为空";
        res.json(responseData);
        return;
    }

    // 根据登录名从数据库中查询数据
    db.query(`SELECT id,username,password FROM user_table WHERE username="${logUsername}"`, function (error, results) {
        if (error) throw error;
        // console.log(results); // 打印数据库查询的结果，是一个数组
        if (results.length == 0) {
            responseData.code = 2;
            responseData.message = "用户名不存在";
            res.json(responseData);
        } else {
            // 比较登录密码和数据库中的哈希密码。使用的是bcrypt模块的compareSync同步方法，官网还有异步方法
            let checkpass = bcrypt.compareSync(logPassword, results[0].password);
            if (checkpass) {
                responseData.code = 0;
                responseData.message = "登录成功";
                // 根据前端登录的用户名或id生成一个token
                let token = jwt.sign({ user_id: results[0].id, user_name: results[0].username }, mySecret)
                responseData.token = token;
                res.json(responseData);

            } else {
                responseData.code = 3;
                responseData.message = "密码错误";
                res.json(responseData);
            }

        }
    });
})




// 使用中间件isLogin
router.get('/userlist', (req, res) => {

    let mytoken = req.headers['authorization'];

    if (mytoken) {

        try {
            let result = jwt.verify(mytoken, mySecret);
            res.json(result)
        } catch (error) {
            res.json({ code:'999', msg: '权限验证失败,你无权访问用户列表' })
        }

        // new Promise((resolve, reject) => {
        //     let result = jwt.verify(mytoken, mySecret)
        //     resolve(result)
        // }).then((params) => {
        //     db.query(`SELECT id,username FROM user_table`, function (error, results) {
        //         if (error) throw error;
        //         res.json(results)
        //     });
        // }).catch(() => {
        //     res.json({ msg: '权限验证失败,你无权访问用户列表' })
        // })
    } else {
        res.json({ code: '999', msg: 'token为空，请登录！' })
    }

})



module.exports = router