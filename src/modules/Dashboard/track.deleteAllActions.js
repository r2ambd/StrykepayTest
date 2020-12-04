import Track from "./track.model";

export async function deleteAllActions(req, res) {
  await Track.deleteMany();

  res.status(200).json("All actions removed from Database");
}
