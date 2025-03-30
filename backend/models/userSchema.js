import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      requried: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);

export default userModel;
