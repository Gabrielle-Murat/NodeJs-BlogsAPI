const loginData = require('../schemas/loginValidation');

function loginValidation(req, res, next) {
  // console.log(req.body);
  const { error } = loginData.validate(req.body);
  // console.log('oi');
  // console.log(error);
  // console.log(value);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(parseInt(code, 10)).json({ message });
    // return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
}

module.exports = loginValidation;
