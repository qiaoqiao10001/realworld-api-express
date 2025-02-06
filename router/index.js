const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Worldss');
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World');
});

router.use(require('./user'));
router.use('/profiles', require('./profile.js'));
router.use('/articles', require('./article.js'));
router.use(require('./tag.js'));

module.exports = router;
