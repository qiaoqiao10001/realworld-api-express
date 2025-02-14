const { body } = require('express-validator');
const validator = require('../middleware/validate.js');

exports.createArticle = validator([
  body('article.title').notEmpty().withMessage('标题不能为空'),
  body('article.description').notEmpty().withMessage('描述不能为空'),
  body('article.body').notEmpty().withMessage('内容不能为空')
]);
