const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string()
    .required()
    .messages({
      'string.empty': '400|Some required fields are missing',
      'string.base': '422|Invalid format',
    }),

  password: Joi.string()
    .required()
    .messages({
      'string.empty': '400|Some required fields are missing',
      'string.base': '422|Invalid format',
    }),
});
