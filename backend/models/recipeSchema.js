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
  },
  coverImage: {
    type: String,
  },
});

const recipeModel = model("recipe", recipeSchema);

export default recipeModel;
