import User from "./user.model";
import Track from "../Dashboard/track.model";
import momentTZ from "moment-timezone";

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);

    let date = Date.now();
    date = momentTZ.tz(date, "Africa/Cairo").format("LLLL");

    let track = new Track({
      email: user.email,
      action: "Sign Up",
      date: date
    });
    await track.save();

    const token = await user.generateAuthToken();
    return res
      .status(201)
      .header("x-auth-token", token)
      .json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
}
