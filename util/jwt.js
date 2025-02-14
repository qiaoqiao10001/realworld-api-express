const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.sign = promisify(jwt.sign);

exports.verify = promisify(jwt.verify);

exports.decode = promisify(jwt.decode);

// 生成token
const generateToken = user => {
  return jwt.sign(
    {
      id: user._id,
      userName: user.userName
    },
    'realword2025'
  );
};

console.log(
  generateToken({
    _id: '5e9f7a3f3b3b3e1f4c9b2e2f',
    userName: 'admin'
  })
);

// 验证token
exports.verifyToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'realword2025', (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};
