module.exports = async app => {
  // 用户登录
  app.post('/api/login', require('./login'));
  // 用户注册
  app.post('/api/reg', require('./reg'));
  // 添加事务
  app.post('/api/addAc', require('./addAction'));
  // 删除事务
  app.post('/api/removeAc', require('./removeAc'));
  //查询未完成的事务
  app.get('/api/findAc', require('./findAc'));
  // 获取事务数量
  app.get('/api/countAc', require('./countAc'));
  // 更新事务状态
  app.post('/api/upState', require('./upState'));
}