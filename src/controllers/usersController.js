const User = require('../services/usersService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const response = await User.createUser(displayName, email, password, image);

  if (response === 'user existente') {
    return res.status(409).json({ message: 'User already registered' });
  }

  return res.status(201).json({ token: response });
};

module.exports = {
  createUser,
};
