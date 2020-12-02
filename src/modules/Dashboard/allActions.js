import Track from "./track.model";

export async function allActions(req, res) {
  const actions = await Track.find();

  res.status(200).json(actions);
}
