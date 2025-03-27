import recipeModel from "../models/recipeSchema.js";

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

//add recipe
export const addRecipe = async (req, res) => {
  try {
    const recipe = await recipeModel.create(req.body);
    res.status(201).json({ success: true, data: recipe });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
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
