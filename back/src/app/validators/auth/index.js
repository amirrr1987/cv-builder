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
    mobile: Joi.string().required(),
    password: Joi.string().required()
  });
  return await schema.validateAsync(data);
};

module.exports = {
  valdateLoginAuth,
  valdateRegisterAuth,
};
