const { Things1 } = require('../model/things');
const { checkToken } = require('../untils/createToken');
const { User } = require('../model/user');
module.exports = async (req, res) => {
  const { startTime, actions, token } = req.body;
  if (startTime && actions && token) {
    try {
      console.log(req.body);
      
      var { _id } = await checkToken(token);
      let addInfo = await Things1.create({ startTime, actions, user: _id });
      var original = await User.findById(_id);
      var counts = original.counts + 1;
      await User.updateOne({ _id }, { $set: { counts: counts } })
      return res.send({ msg: 'add ok!', code: 200, addInfo });
    } catch (err) {
      return res.status(400).send({ msg: 'token is invalid or database wrong', code: -999, err: err });
    }
  }
  else {
    return res.status(400).send({ msg: 'wrong', code: 500 });
  }
}