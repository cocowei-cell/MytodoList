const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  // 1.允许哪些客户端访问我
  
  // 注意：如果跨域请求中涉及到cookie信息传递，值不可以为*号 比如是具体的域名信息
  res.header('Access-Control-Allow-Origin', '*')
  // 2.允许客户端使用哪些请求方法访问我
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'get,post,delete')
  // 允许客户端发送跨域请求时携带cookie信息
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

require('./route')(app);

mongoose.connect('mongodb://localhost:27017/mydo', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('The database connection!'))
  .catch(() => console.log('The database connection failed!'));

app.listen('5211', () => {
  console.log('The server is listening');
})

