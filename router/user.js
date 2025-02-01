const express = require('express');
const userCtrl = require('../controllers/user');

const router = express.Router();
// 登录
router.post('/users/login', userCtrl.login);
// 注册
router.post('/users', userCtrl.register);
// 获取用户信息
router.get('/user', userCtrl.getCurrentUser);
// 更新用户
router.put('/user', userCtrl.updateCurrentUser);

module.exports = router;
