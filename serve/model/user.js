const mongoose = require('mongoose');
const { Schema } = mongoose;
const Joi = require('joi');
const UserModel = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  counts: {
    type: Number,
    default: 0
  }
}, { versionKey: false })
const User = mongoose.model('user', UserModel);
const validateUser = user => {
  // 定义对象验证规则
  const schema = {
    email: Joi.string().regex(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).required().error(new Error('邮箱不符合验证规则')),
    password: Joi.string().required().regex(/^[a-zA-Z0-9]{6,16}$/).error(new Error('密码不符合验证规则')),
  };
  // 验证
  return Joi.validate(user, schema, {
    // 检测到所有错误
    abortEarly: false,
    // 允许对象包含被忽略的未知键
    allowUnknown: true
  });
}

const validateLogin = user => {
  // 定义对象验证规则
  const schema = {
    email: Joi.string().regex(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).required().error(new Error('邮箱或密码错误')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).error(new Error('邮箱或密码错误'))
  };
  // 验证
  return Joi.validate(user, schema, {
    // 检测到错误立即返回
    abortEarly: true
  });
}

module.exports = {
  User,
  validateUser,
  validateLogin
}