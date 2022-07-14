// requisito 3

require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;

const postLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) return 'invalid';

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

module.exports = {
  postLogin,
};
