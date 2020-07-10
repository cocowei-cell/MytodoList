const { Things1 } = require('../model/things');
const { User } = require('../model/user');
const { checkToken } = require('../untils/createToken');
module.exports = async (req, res) => {
  const { id, token } = req.body;
  if (id && token) {
    try {
      let { _id } = await checkToken(token);
      await Things1.findByIdAndUpdate(id, { $set: { state: true } });
      // 查询用户未完成数量
      let { counts } = await User.findOne({ _id });
      // 更新数量-1
      await User.updateOne({ _id }, { $set: { counts: counts - 1 } });
      return res.send({ code: 200, msg: 'update success' });
    } catch (err) {
      return res.status(400).send({ msg: 'token is invalid or database wrong', code: -999 });
    }
  }
  else {
    return res.status(400).send({ msg: 'wrong', code: 500 });
  }
}