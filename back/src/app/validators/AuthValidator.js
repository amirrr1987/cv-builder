const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const valdateLoginAuth = async (data) => {
  const schema = Joi.object({
    mobile: Joi.string().required(),
    password: Joi.string().required()
  });

  return await schema.validateAsync(data);
};

const valdateRegisterAuth = async (data) => {
  const schema = Joi.object({
    mobile: Joi.string().min(11).max(11).required().messages({
      "string.min": "mobile Min 11 characteers",
      "string.max": "mobile Max 11 characteers",
      "string.empty": "mobile cannot be empty",
    }),
    password: Joi.string().min(11).max(11).required().messages({
      "string.min": "password Min 11 characteers",
      "string.max": "password Max 11 characteers",
      "string.empty": "password cannot be empty",
    })
  });
  return await schema.validateAsync(data);
};

module.exports = {
  valdateLoginAuth,
  valdateRegisterAuth,
};
