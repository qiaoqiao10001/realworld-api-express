const { Article } = require('../model');

exports.getArticles = async (req, res, next) => {
  try {
    res.send('get articles');
  } catch (error) {
    console.log(error);
  }
};

exports.getFeedArticles = async (req, res, next) => {
  try {
    res.send('get articles');
  } catch (error) {
    console.log(error);
  }
};

exports.getArticle = async (req, res, next) => {
  try {
    res.send('get articles');
  } catch (error) {
    console.log(error);
  }
};

exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article);
    await article.save();
    res.status(201).json({
      article
    });
  } catch (error) {
    next(error);
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    res.send('get articles');
  } catch (error) {
    console.log(error);
  }
};
exports.deleteArticle = async (req, res, next) => {
  try {
    res.send('get articles');
  } catch (error) {
    console.log(error);
  }
};
exports.createArticleComment = async (req, res, next) => {
  try {
    res.send('get articles');
  } catch (error) {
    console.log(error);
  }
};
exports.getArticleComment = async (req, res, next) => {
  try {
    res.send('get articles');
  } catch (error) {
    console.log(error);
  }
};
exports.deleteArticleComment = async (req, res, next) => {
  try {
    res.send('get articles');
  } catch (error) {
    console.log(error);
  }
};
