const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../services/usersService');

const secret = process.env.JWT_SECRET;

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

// requisito 6

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.getUserById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });
  
  return res.status(200).json(user);
};

// requisito 17

const deleteUser = async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, secret);
  const userId = decoded.data.id;

  const response = await User.deleteUser(userId);

  if (response === 'user not found') return res.status(404).json({ message: 'User not found' });

  return res.status(204).end();
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};
