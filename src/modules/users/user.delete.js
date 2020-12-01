import User from "./user.model";

export async function deleteUser(req, res) {
  await User.findOneAndDelete({ email: req.user.email });

  res.status(200).json("User Deleted");
}
