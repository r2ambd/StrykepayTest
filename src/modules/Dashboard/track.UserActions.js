import Track from "./track.model";
import User from "../users/user.model";

export async function userActions(req, res) {
  const user = await User.findOne({ email: req.query.email });
  if (!user) return res.status(404).json("User not found");

  if (req.query.email && req.query.action) {
    const actions = await Track.find({
      $and: [{ email: req.query.email }, { action: req.query.action }]
    }).select();

    res.status(200).json(actions);
  }

  if (!req.query.action) {
    const actions = await Track.find({
      email: req.query.email
    }).select();

    res.status(200).json(actions);
  }
}
