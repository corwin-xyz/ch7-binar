module.exports = (req, res, next) => {
  if (req.loggedInUser.role === 'SuperAdmin') {
    next();
  } else {
    res.status(401).json({
      message: 'You are not authorized.',
    });
  }
};
