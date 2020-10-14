const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

const cors = require('cors');
app.use(cors())

app.use('/upload', require('./routers/upload.js'))
app.use('/user', require('./routers/user.js'))


// 这里的sql语句是方便调试sql语句是否有效，便于查看结果
// const db = require('./db/config.js');
// db.query(`SELECT * FROM user_table`, function (error, results) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });


app.use(express.static('public'))

app.listen(port, () => console.log(`服务器已经启动了`))

