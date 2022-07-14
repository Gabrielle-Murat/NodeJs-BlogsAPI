const User = require('../services/usersService');

// requisito 4

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const response = await User.createUser(displayName, email, password, image);

  if (response === 'user existente') {
    return res.status(409).json({ message: 'User already registered' });
  }

  return res.status(201).json({ token: response });
};

// requisito 5

const getUsers = async (_req, res) => {
  const users = await User.getUsers();

  if (!users) return res.status(500).json({ message: 'Something went wrong' });

  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getUsers,
};
