const express = require('express');
const userCtrl = require('../controller/user.js');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const { User } = require('../model/index.js');
const userValidator = require('../validator/user.js');
const auth = require('../middleware/auth.js');
// 登录
router.post('/users/login', userValidator.login, userCtrl.login);
// 注册
router.post(
  '/users/register',
  userValidator.register,
  userCtrl.register // 通过验证，执行具体的控制器处理函数
);
// 获取用户信息
router.get('/user', auth, userCtrl.getCurrentUser);
// 更新用户
router.put('/user', auth, userCtrl.updateCurrentUser);

module.exports = router;
