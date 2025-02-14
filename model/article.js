const mongoose = require('mongoose');
const baseModel = require('./baseModel.js');

const articleSchema = new mongoose.Schema({
  ...baseModel,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tagList: {
    type: [String],
    default: null
  },
  favoritesCount: {
    // 点赞数
    type: Number,
    default: 0
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

//const authorSchema = new mongoose.Schema({
//  username: {
//    type: String,
//    required: true
//  },
//  bio: {
//    type: String,
//    default: null
//  },
//  image: {
//    type: String,
//    default: null
//  },
//  following: {
//    type: Boolean,
//    default: false
//  }
//});

//const Author = mongoose.model('Author', authorSchema);

module.exports = articleSchema;
