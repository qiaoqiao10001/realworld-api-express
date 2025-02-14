const mongoose = require('mongoose');
const baseModel = require('./baseModel.js');
const md5 = require('../util/md5.js');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: value => md5(value), // 保证入库是md5加密后的密码
    select: false // 查询时不返回密码字段
  },
  bio: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  ...baseModel
});

module.exports = userSchema;
