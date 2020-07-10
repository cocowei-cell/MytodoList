const { User, validateUser } = require('./../model/user');
let i = 0;
module.exports = async (req, res) => {
  console.log(i++)
  let { email, password } = req.body;
  
  const { error } = validateUser({ email, password });
  if (error) return res.status(400).send({ msg: error.message });
  let tag = await User.findOne({ email });
  if (tag) {
    return res.status(400).send({ msg: '邮箱已被注册', code: 500 });
  }
  try {
    await User.create({ email, password });
    return res.send({ code: 1, msg: '注册成功' });
  } catch (e) {
    return res.status(500).send({ msg: 'Server wrong!' });
  }
}
