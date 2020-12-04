import joi from "joi";

import User from "./user.model";

import Track from "../Dashboard/track.model";
import momentTZ from "moment-timezone";

export async function update(req, res) {
  const { error } = updatePassword(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  const user = await User.findOne({ _id: req.user._id });

  if (!req.body.oldPW || req.body.oldPW != user.password)
    return res.status(400).json("Invalid old password");

  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { password: req.body.newPW } },
    { new: true }
  );

  let date = Date.now();
  date = momentTZ.tz(date, "Africa/Cairo").format("LLLL");

  let track = new Track({
    email: req.user.email,
    action: "Password Update",
    date: date
  });
  await track.save();

  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { actions: track._id } },
    { new: true }
  );

  res.status(200).json(user);
}

function updatePassword(user) {
  const schema = joi.object({
    oldPW: joi.string().required(),
    newPW: joi.string().required()
  });
  return schema.validate(user);
}
