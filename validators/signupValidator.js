import processJoiErrors from "./processJoiErrors";
const Joi = require("@hapi/joi");
const signupValidator = function (user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(4).max(255).required(),
  });
  let { error } = schema.validate(user, { abortEarly: false });
  if (error) return processJoiErrors(error);
  else return null;
};
export default signupValidator;
