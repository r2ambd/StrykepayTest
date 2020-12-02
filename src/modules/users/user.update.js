import joi from "joi";

import User from "./user.model";

import Track from "../Dashboard/track.model";
import momentTZ from "moment-timezone";

export async function update(req, res) {
  const { error } = updateUserName(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOneAndUpdate(
    { email: req.user.email },
    { $set: { firstName: req.body.firstName, lastName: req.body.lastName } },
    { new: true }
  );

  let date = Date.now();
  date = momentTZ.tz(date, "Africa/Cairo").format("LLLL");

  let track = new Track({
    email: req.user.email,
    action: "Name Update",
    date: date
  });
  await track.save();

  res.status(200).json(user);
}

function updateUserName(user) {
  const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required()
  });
  return schema.validate(user);
}
