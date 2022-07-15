const blogPostData = require('../../schemas/blogPostUpdateValidation');

function blogPostUpdateValidation(req, res, next) {
  const { error } = blogPostData.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(parseInt(code, 10)).json({ message });
  }

  return next();
}

module.exports = blogPostUpdateValidation;
