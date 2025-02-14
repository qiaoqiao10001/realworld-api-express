const { body } = require('express-validator');
const validator = require('../middleware/validate.js');
const { User } = require('../model/index.js');
const md5 = require('../util/md5.js');
exports.register = validator([
  // 配置中间件验证数据
  body('user.userName')
    .notEmpty()
    .withMessage('用户名不能为空')
    .custom(async userName => {
      const user = await User.findOne({ userName });
      if (user) {
        return Promise.reject('用户名已存在');
      }
    }),
  body('user.password').notEmpty().withMessage('密码不能为空'),

  body('user.email')
    .notEmpty()
    .withMessage('邮箱不能为空')
    .isEmail()
    .withMessage('邮箱格式不正确')
    .bail()
    .custom(async email => {
      const user = await User.findOne({ email });
      if (user) {
        return Promise.reject('邮箱已存在');
      }
    })
]);

exports.login = [
  validator([
    body('user.email').notEmpty().withMessage('邮箱不能为空'),
    body('user.password').notEmpty().withMessage('密码不能为空')
  ]),
  validator([
    body('user.email').custom(async (email, { req }) => {
      const user = await User.findOne({ email }).select([
        'email',
        'bio',
        'image',
        'userName',
        'password'
      ]);
      if (!user) {
        return Promise.reject('用户不存在');
      }
      req.user = user;
      // 把查询到的用户挂在到req上  后续的中间件都可以使用req.user
    })
  ]),
  validator([
    // 针对密码的校验
    body('user.password').custom(async (password, { req }) => {
      console.log(req.user, '===');
      if (req.user.password !== md5(password)) {
        return Promise.reject('密码错误');
      }
    })
  ])
];
