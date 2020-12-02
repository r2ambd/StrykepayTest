import mongoose, { Schema } from "mongoose";

const trackSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

export default mongoose.model("Track", trackSchema);
