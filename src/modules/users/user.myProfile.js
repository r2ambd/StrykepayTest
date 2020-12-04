import User from "./user.model";

export async function myProfile(req, res) {
  const user = await User.findOne({ _id: req.user._id }).select();

  res.status(200).json(user);
}
