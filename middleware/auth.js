const { jwtSecret } = require('../config/config.default.js');
const { verify } = require('../util/jwt.js');
const { User } = require('../model');
// 验证身份
module.exports = async (req, res, next) => {
  // 从请求头获取token
  // 验证token是否有效
  // 如果token有效，将用户信息挂载到req对象上
  // 如果token无效，返回401状态码
  let reqauth = req.headers.authorization;

  token = reqauth ? reqauth.split('Bearer ')[1] : '';
  console.log(token, '==token');
  if (!token) {
    return res.status(401).json({ errors: { global: '请先登录' } });
  }
  // 验证token是否有效
  try {
    const decodedToken = await verify(token, jwtSecret);
    req.user = await User.findById(decodedToken.userId);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ errors: { global: 'token失效' } });
  }
};
