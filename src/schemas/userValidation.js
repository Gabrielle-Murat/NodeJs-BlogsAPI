// requisito 4

const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.base': '422|Invalid format',
      'string.min': '400|"displayName" length must be at least 8 characters long',
      'string.empty': '400|"displayName" is required',
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
    .required()
    .messages({
      'string.base': '422|Invalid format',
      'string.email': '400|"email" must be a valid email',
      'string.empty': '400|"email" is required',
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.base': '422|Invalid format',
      'string.min': '400|"password" length must be at least 6 characters long',
      'string.empty': '400|"password" is required',
    }),

  image: Joi.string()
    // .required()
    .messages({
      // 'string.empty': '400|"image" is required',
      'string.base': '422|Invalid format',
    }),
});
