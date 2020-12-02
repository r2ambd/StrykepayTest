import Track from "./track.model";

export async function trackDelete(req, res) {
  const actions = await Track.find({ action: "Deletion" });

  res.status(200).json(actions);
}
