const express = require('express');
const router = express.Router();

const articleCtrl = require('../controller/article.js');

router.get('/', articleCtrl.getArticle);

router.post('/', articleCtrl.postArticle);

module.exports = router;
