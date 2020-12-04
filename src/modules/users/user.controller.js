import User from "./user.model";
import Track from "../Dashboard/track.model";
import momentTZ from "moment-timezone";

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);

    await user.save();

    const token = await user.generateAuthToken();

    let date = Date.now();
    date = momentTZ.tz(date, "Africa/Cairo").format("LLLL");

    let track = new Track({
      email: user.email,
      action: "Sign Up",
      date: date
    });
    await track.save();

    await User.findOneAndUpdate(
      { _id: user._id },
      { $push: { actions: track._id } },
      { new: true }
    );
    return res
      .status(201)
      .header("x-auth-token", token)
      .json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
}
