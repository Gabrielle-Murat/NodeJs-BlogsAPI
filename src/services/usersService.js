require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;

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

module.exports = {
  createUser,
};
