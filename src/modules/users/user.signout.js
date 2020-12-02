import Track from "../Dashboard/track.model";
import momentTZ from "moment-timezone";

export async function singout(req, res) {
  let date = Date.now();
  date = momentTZ.tz(date, "Africa/Cairo").format("LLLL");

  let track = new Track({
    email: req.user.email,
    action: "Sign Out",
    date: date
  });
  await track.save();

  res.status(200).json("Loged Out");
}
