const express = require('express');
const router = express.Router();

const profileCtrl = require('../controller/user.js');

router.get('/:username', profileCtrl.getProfile);

// 关注用户
router.post('/:username/follow', profileCtrl.followUser);

// 取消关注
router.post('/:username/unfollow', profileCtrl.unFollowUser);

module.exports = router;
