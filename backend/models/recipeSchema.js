import mongoose, { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

const recipeModel = model("recipe", recipeSchema);

export default recipeModel;
