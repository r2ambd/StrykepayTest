import Track from "./track.model";

export async function Update(req, res) {
  const actions = await Track.find({ action: "Password Update" });

  res.status(200).json(actions);
}
