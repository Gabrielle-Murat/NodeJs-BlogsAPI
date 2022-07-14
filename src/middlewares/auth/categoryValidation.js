// requisito 8

const categoryData = require('../../schemas/categoryValidation');

function categoryValidation(req, res, next) {
  const { error } = categoryData.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(parseInt(code, 10)).json({ message });
  }

  return next();
}

module.exports = categoryValidation;
