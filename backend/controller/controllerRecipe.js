import recipeModel from "../models/recipeSchema.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

//get all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel.find();
    res.status(200).json({ success: true, data: recipes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//get one recipe
export const getRecipe = async (req, res) => {
  try {
    const singleRecipe = await recipeModel.findById(req.params.id);
    res.send({ success: true, data: singleRecipe });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//get recipes by user's id
export const getUserRecipes = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.id);
    const userRecipes = await recipeModel.find({ createdBy: userId });
    res.json({ success: true, data: userRecipes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//add recipe
export const addRecipe = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify and decode token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    // Add recipe with createdBy field set to userId
    const recipeData = {
      ...req.body,
      createdBy: userId,
    };

    const recipe = await recipeModel.create(recipeData);

    res.status(201).json({ success: true, data: recipe });
  } catch (err) {
    res
      .status(403)
      .json({ success: false, message: "Invalid token", error: err.message });
  }
};

//edit recipe
export const editRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecipe = await recipeModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedRecipe) {
      return res
        .status(404)
        .json({ success: false, message: "Recipe not found" });
    }

    res.status(200).json({ success: true, data: updatedRecipe });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//delete recipe
export const deleteRecipe = async (req, res) => {
  try {
    const deleteRecipe = await recipeModel.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: deleteRecipe });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
