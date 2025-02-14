const crypto = require('crypto');

module.exports = str => {
  return crypto
    .createHash('md5')
    .update('加盐字符' + str)
    .digest('hex');
};
