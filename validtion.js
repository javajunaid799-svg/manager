const Joi = require('joi');

// Register panna munnadi data-va check panna oru schema
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(8).required()
    });

    return schema.validate(data); // Inga dhaan logic validate aagum
};

// Login-ku vera logic (email and password mattum podhum)
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(8).required()
    });

    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
