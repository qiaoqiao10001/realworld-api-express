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
router.use('/profiles', require('./profile'));
router.use('/articles', require('./article'));
router.use(require('./tag'));

module.exports = router;
