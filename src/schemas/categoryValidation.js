// requisito 8

const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.base': '422|Invalid format',
      'string.min': '400|"name" must be at least 3 characters long',
      'any.required': '400|"name" is required',
    }),
});
