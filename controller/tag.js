exports.getTag = async (req, res, next) => {
  try {
    res.send('tags');
  } catch (err) {
    next(err);
  }
};
