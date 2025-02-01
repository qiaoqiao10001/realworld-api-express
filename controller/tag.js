exports.getTag = async (req, res, next) => {
  try {
    res.send('register users');
  } catch (err) {
    next(err);
  }
};
