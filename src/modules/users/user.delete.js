import User from "./user.model";
import Track from "../Dashboard/track.model";
import momentTZ from "moment-timezone";

export async function deleteUser(req, res) {
  await User.findOneAndDelete({ email: req.user.email });

  let date = Date.now();
  date = momentTZ.tz(date, "Africa/Cairo").format("LLLL");

  let track = new Track({
    email: req.user.email,
    action: "Deletion",
    date: date
  });
  await track.save();

  await User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { actions: track._id } },
    { new: true }
  );

  res.status(200).json("User Deleted");
}
