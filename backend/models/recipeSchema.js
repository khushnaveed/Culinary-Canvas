import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  title: {
    type: String,
    requried: true,
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
});

const recipeModel = model("recipe", recipeSchema);

export default recipeModel;
