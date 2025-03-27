import express from "express";
import { config } from "dotenv";
import getRecipes from "./routes/routeRecipe.js";
import { connectDb } from "./config/connectionDb.js";

config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.json());

app.use("/recipe", getRecipes);

app.listen(PORT, (err) => {
  console.log(`Server is running at ${PORT}`);
});
