// requisito 12

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

  categoryIds: Joi.array()
    .items(
      Joi.number()
        .required(),
    )
    .min(1)
    .messages({
      'array.base': '422|Invalid format',
      'array.min': '400|Some required fields are missing',
      'any.required': '400|Some required fields are missing',
    }),
 });
