const { User } = require('../model');

exports.register = async (req, res, next) => {
  try {
    // 1. 获取请求体数据

    // 2. 验证用户输入
    // 2.1 基本数据验证 ：username必须 邮箱必须 符合邮箱格式
    // 2.2 业务数据验证 ： email不能重复，username不能重复
    // 3. 验证通过 将数据保存到数据库
    // 4. 发送成功响应

    const user = new User(req.body.user);
    await user.save();
    res.status(200).json({
      user: user
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    // 获取用户输入
    // 数据验证
    // 发送token 和成功响应
  } catch (err) {
    next(err);
  }
};

exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send('register users');
  } catch (err) {
    next(err);
  }
};

exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('login users');
  } catch (err) {
    next(err);
  }
};
