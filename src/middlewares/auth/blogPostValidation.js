// requisito 12

const blogPostData = require('../../schemas/blogPostValidation');

function blogPostValidation(req, res, next) {
  const { error } = blogPostData.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(parseInt(code, 10)).json({ message });
  }

  return next();
}

module.exports = blogPostValidation;