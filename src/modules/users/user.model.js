import mongoose, { Schema } from "mongoose";
import validator from "validator";
import { passwordReg } from "./user.validations";
import jwt from "jsonwebtoken";
import key from "../../config/constants";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required!"],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: "{VALUE} is not a valid email!"
    }
  },
  firstName: {
    type: String,
    required: [true, "FirstName is required!"],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, "LastName is required!"],
    trim: true
  },
  userName: {
    type: String,
    required: [true, "UserName is required!"],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    trim: true,
    minlength: [6, "Password need to be longer!"],
    validate: {
      validator(password) {
        return passwordReg.test(password);
      },
      message: "{VALUE} is not a valid password!"
    }
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  actions: [{ type: Schema.Types.ObjectId, ref: "Track" }]
});

UserSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign(
    { _id: this._id, email: this.email, isAdmin: this.isAdmin },
    key.JWT_KEY
  );

  return token;
};
export default mongoose.model("User", UserSchema);
