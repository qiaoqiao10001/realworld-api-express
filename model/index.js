const mongoose = require('mongoose');

const { dbURI } = require('../config/config.default.js');

mongoose.connect(dbURI);

const db = mongoose.connection;
db.on('error', err => {
  console.log('connection error:', err);
});
db.once('open', function () {
  //  链接成功
  console.log('链接成功 ~^_^~ we are connected!');
  // we're connected!
});

// 组织导出模型类
module.exports = {
  User: mongoose.model('User', require('./user.js')),
  Article: mongoose.model('Article', require('./article.js')),
  Tag: mongoose.model('Tag', require('./tag.js'))
};

// 定义一个模型
//const Cat = mongoose.model('Cat', { name: String });
//// 实例化一个模型
//const kitty = new Cat({ name: 'Zildjian' });
//// 持久化保存kitty实例
//kitty.save().then(() => console.log('meow'));
