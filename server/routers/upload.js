// 这是上传图片的路由，用来实现上传图片功能


var express = require('express')
var router = express.Router()

const pathmod = require('path')
const fs = require('fs')

const multer = require('multer')
var upload = multer({ dest: 'uploads/' })

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})



router.post('/touxiang', upload.single('avatar'), function (req, res, next) {
    console.log(req.file);
    var newname1 = req.file.path + pathmod.parse(req.file.originalname).ext
    var newname2 = req.file.path + pathmod.extname(req.file.originalname)
    console.log(newname1);
    console.log(newname2);
    fs.rename(req.file.path, newname1, (err) => {
        if (err) {
            res.send("上传失败")
        } else {
            res.send("上传成功")
        }
    })
})


module.exports = router