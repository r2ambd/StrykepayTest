import Track from "./track.model";

export async function logOut(req, res) {
  const actions = await Track.find({ action: "Sign Out" });

  res.status(200).json(actions);
}
