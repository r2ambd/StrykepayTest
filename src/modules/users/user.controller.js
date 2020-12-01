import User from "./user.model";
export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);

    const token = await user.generateAuthToken();
    return res
      .status(201)
      .header("x-auth-token", token)
      .json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
}
