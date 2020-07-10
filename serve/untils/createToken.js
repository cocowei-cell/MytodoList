const jwt = require('jsonwebtoken');
let secret = 'asdasd5a456+.a1s1d54q56wdqwdqqasfasf'; //签名

function createToken(payload) {
  payload.crtime = Date.now;
  return jwt.sign(payload, secret);
}

function checkToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, result) => {
      if (err) { reject(err) }
      resolve(result);
    })
  })
}

module.exports = { createToken, checkToken };

