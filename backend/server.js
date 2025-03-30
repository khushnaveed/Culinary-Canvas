import express from "express";
import { config } from "dotenv";
import { connectDb } from "./config/connectionDb.js";
import cors from "cors";
import userRoutes from "./routes/routeUser.js"; 
import recipeRoutes from "./routes/routeRecipe.js";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

connectDb();

app.use("/recipe", recipeRoutes);
app.use("/user", userRoutes);

app.listen(PORT, (err) => {
  console.log(`Server is running at ${PORT}`);
});
