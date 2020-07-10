const { User, validateLogin } = require('./../model/user')
const { createToken, checkToken } = require('../untils/createToken');
const _ = require('lodash');
module.exports = async (req, res) => {
  let { email, password } = req.body;
  
  const { error } = validateLogin({ email, password });
  if (error) return res.status(400).send({ msg: error.message });
  var isLog = await User.findOne({ email: email });
  if (isLog) {
    var info = _.pick(isLog, ['email','_id']);
    info.login = true;
    var token = createToken(info);
    return res.send({ code: 200, token: token, msg: '登录成功' });
  } else {
    return res.status(400).send({ code: -999, msg: '账号或密码错误' });
  }
}
