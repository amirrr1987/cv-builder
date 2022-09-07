const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const valdateCreateAuth = async (data) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repassword: Joi.ref('password'),
  });

  return await schema.validateAsync(data);
};

const valdateUpdateAuth = async (data) => {
  const schema = Joi.object({
    id: Joi.objectId(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repassword: Joi.ref('password'),
  });
  return await schema.validateAsync(data);
};

module.exports = {
  valdateCreateAuth,
  valdateUpdateAuth,
};
