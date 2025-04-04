import {
  getRecipes,
  getRecipe,
  getUserRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
} from "../controller/controllerRecipe.js";
import { Router } from "express";

const router = Router();

router.get("/", getRecipes); //get all recipes
router.get("/:id", getRecipe); //get recipe by id
router.get("/user/:id", getUserRecipes); //get recipes by user id
router.post("/", addRecipe); //add recipe
router.put("/:id", editRecipe); //edit recipe
router.delete("/:id", deleteRecipe); //delete recipe by id

export default router;
