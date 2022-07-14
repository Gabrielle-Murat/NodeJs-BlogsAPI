// requisito 3

const Login = require('../services/loginService');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const loginResponse = await Login.postLogin(email, password);

  if (loginResponse === 'invalid') {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ token: loginResponse });
};

module.exports = {
  postLogin,
};