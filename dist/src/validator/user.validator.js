"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const nameRules = joi_1.default.string()
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
const emailRules = joi_1.default.string()
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
const registerValidationSchema = joi_1.default.object({
    name: nameRules,
    email: emailRules,
    businessType: joi_1.default.string().valid('Retail', 'Wholesale').required(),
    reason: joi_1.default.string().required(),
    phoneNumber: joi_1.default.string()
});
exports.registerValidationSchema = registerValidationSchema;
