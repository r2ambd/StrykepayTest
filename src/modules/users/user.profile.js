import User from "./user.model";

export async function userProfile(req, res) {
  const user = await User.findOne({ _id: req.params.userId }).populate(
    "actions"
  );

  res.status(200).json(user);
}
