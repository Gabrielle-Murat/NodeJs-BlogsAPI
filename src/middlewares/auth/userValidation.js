// requisito 4

const userData = require('../../schemas/userValidation');

function userValidation(req, res, next) {
  const { error } = userData.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(parseInt(code, 10)).json({ message });
  }

  return next();
}

module.exports = userValidation;
