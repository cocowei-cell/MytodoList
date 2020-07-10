const { Things1 } = require('../model/things');
const { checkToken } = require('../untils/createToken');
const { User } = require('../model/user')
module.exports = async (req, res) => {
  const { token } = req.query;
  if (token) {
    try {
      var { _id } = await checkToken(token);
      var user = await User.findOne({ _id });
      var counts = user.counts;  // 用户未完成数目
      var ThingsCounts = await Things1.countDocuments({ user: _id, state: true }); //用户已完成数目
      return res.send({ msg: 'add ok!', count: { noSuccess: counts, Success: ThingsCounts } });
    } catch (err) {
      return res.status(400).send({ msg: 'token is invalid or database wrong', code: 500, err: err });
    }
  }
  else {
    return res.status(400).send({ code: 500, msg: 'wrong' });
  }
}