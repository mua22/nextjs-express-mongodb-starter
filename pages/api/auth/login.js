import User from "../../../models/user";
import _ from "lodash";
import bcrypt from "bcryptjs";
import loginValidator from "../../../validators/loginValidator";
import nextSessionMiddleware from "../../../next-middlewares/next-session-middleware";
const handler = async function handler(req, res) {
  if (req.method == "POST") {
    let errors = loginValidator(req.body);
    if (errors) return res.status(400).json(errors);
    let user = await User.findOne({
      email: req.body.email,
    });
    // console.log(user);
    if (!user) return res.status(400).send({ email: "Account Does Not Exist" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send({ password: "Invalid password" });
    req.session.set("user", _.pick(user, ["_id", "email", "name"]));
    await req.session.save();

    return res.status(200).send("Login");
  }
  return res.status(404).send("");
};
export default nextSessionMiddleware(handler);
