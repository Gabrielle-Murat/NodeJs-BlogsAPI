// requisito 3

const loginData = require('../schemas/loginValidation');

function loginValidation(req, res, next) {
  const { error } = loginData.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(parseInt(code, 10)).json({ message });
  }

  return next();
}

module.exports = loginValidation;
