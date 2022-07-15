const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string()
    .required()
    .messages({
      'string.base': '422|Invalid format',
      'string.empty': '400|Some required fields are missing',
    }),

  content: Joi.string()
    .required()
    .messages({
      'string.base': '422|Invalid format',
      'string.empty': '400|Some required fields are missing',
    }),
});
