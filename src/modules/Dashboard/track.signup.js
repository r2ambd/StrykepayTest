import Track from "./track.model";

export async function signUp(req, res) {
  const actions = await Track.find({ action: "Sign Up" });

  res.status(200).json(actions);
}
