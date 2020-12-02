import Track from "./track.model";

export async function signIn(req, res) {
  const actions = await Track.find({ action: "Sign In" });

  res.status(200).json(actions);
}
