const express = require('express');
const router = express.Router();
const articleValidate = require('../validator/article.js');
const articleCtrl = require('../controller/article.js');
const auth = require('../middleware/auth.js');

// 获取文章列表
router.get('/', articleCtrl.getArticle);

// 获取用户关注的作者文章列表
router.get('/feed', articleCtrl.getFeedArticles);

// 获取文章详情
router.get('/:slug', articleCtrl.getArticle);

// 创建文章
router.post(
  '/',
  auth,
  articleValidate.createArticle,
  articleCtrl.createArticle
);

// 更新文章
router.put('/:slug', articleCtrl.updateArticle);

// 删除文章
router.delete('/:slug', articleCtrl.deleteArticle);

// 创建文章评论
router.post('/:slug/:comments', articleCtrl.createArticleComment);

// 获取文章评论
router.get('/:slug/:comments', articleCtrl.getArticleComment);

// 删除文章评论
router.delete('/feed', articleCtrl.deleteArticleComment);

module.exports = router;
