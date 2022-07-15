require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;

// requisito 4

const createUser = async (displayName, email, password, image) => {
  const checkExistance = await User.findOne({ where: { email } });

  if (checkExistance) return 'user existente';

  const newUser = await User.create({ displayName, email, password, image });

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: newUser }, secret, jwtConfig);
  return token;
};

// requisito 5

const getUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

// requisito 6

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) return null;
  return user;
};

// requisito 17

const deleteUser = async (id) => {
  const user = await User.findByPk(id);

  if (!user) return 'user not found';

  await User.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};
