import joi from "joi";

import User from "./user.model";
import Track from "../Dashboard/track.model";
import momentTZ from "moment-timezone";

export async function signIn(req, res) {
  const { error } = validate(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("Invalid email or password");

  if (req.body.password != user.password)
    return res.status(400).json("Invalid email or password");

  let date = Date.now();
  date = momentTZ.tz(date, "Africa/Cairo").format("LLLL");

  let track = new Track({
    email: user.email,
    action: "Sign In",
    date: date
  });
  await track.save();

  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { actions: track._id } },
    { new: true }
  );

  const token = await user.generateAuthToken();

  res
    .status(200)
    .header("x-auth-token", token)
    .json(user);
}

function validate(req) {
  const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
  });
  return schema.validate(req);
}
