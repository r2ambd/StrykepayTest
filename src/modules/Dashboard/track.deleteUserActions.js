import Track from "./track.model";

export async function deleteUserActions(req, res) {
  await Track.deleteMany({ email: req.body.email });

  res.status(200).json(`All actions deleted for user ${req.body.email}`);
}
