const { Things1 } = require('../model/things');

const { checkToken } = require('../untils/createToken');
const _ = require('lodash');
module.exports = async (req, res) => {
  const { token } = req.query;
  try {
    const { _id } = await checkToken(token);
    let info = await Things1.find({ user: _id, state: false });
    return res.send({ code: 200, info: info });
  } catch (e) {
    return res.status(500).send({ code: 500, msg: 'wrong!' });
  }
}