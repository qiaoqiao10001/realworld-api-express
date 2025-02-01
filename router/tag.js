const express = require('express');
const router = express.Router();

const tagCtrl = require('../controller/tag.js');

router.get('/tags', tagCtrl.getTag);

module.exports = router;
