exports.register = async (req, res, next) => {
  try {
    res.send('register users');
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    res.send('login users');
  } catch (err) {
    next(err);
  }
};

exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send('register users');
  } catch (err) {
    next(err);
  }
};

exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('login users');
  } catch (err) {
    next(err);
  }
};
