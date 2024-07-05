import Joi from 'joi';
const nameRules = Joi.string()
  .pattern(new RegExp("[a-zA-Z'-\\s]+$"))
  .required()
  .min(3)
  .max(30)
  .messages({
    'string.base': `Please enter your name. It can only contain [a-z, A-Z, ' and -].`,
    'string.empty': "Please enter your name. It can only contain [a-z, A-Z, ' and -].",
    'any.invalid': `Please enter your name. It can only contain [a-z, A-Z, ' and -].`,
    'string.pattern.base': `Please enter your name. It can only contain [a-z, A-Z, ' and -].`
  });

const emailRules = Joi.string()
  .email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] }
  })
  .messages({
    'string.email': `Please provide a valid email.`,
    'string.base': 'Please provide a valid email.',
    'string.empty': 'Please provide a valid email.',
    'any.invalid': 'Please provide a valid email.'
  })
  .required();

const registerValidationSchema = Joi.object({
  name: nameRules,
  email: emailRules,
  businessType: Joi.string().valid('Retail', 'Wholesale').required(),
  reason: Joi.string().required(),
  phoneNumber: Joi.string()
});

export { registerValidationSchema };
