import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]); // Store the list of recipes
  const [loading, setLoading] = useState(true); // Track loading state
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch the recipe data from the API
    axios
      .get("http://localhost:5000/recipe")
      .then((response) => {
        setRecipes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the recipes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  if (recipes.length === 0) {
    return <div>No recipes found</div>; // Display message if no recipes are found
  }

  return (
    <div className="space-y-8">
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6"
          alt="Cooking"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Culinary Canvas
            </h1>
            <p className="text-xl">Where Every Recipe Tells a Story</p>
            <button
              className="m-3 fspace-x-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
              onClick={() => navigate("/addrecipe")} // Navigate to Add Recipe page
            >
              <span>Share your Recipe</span>
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-8 ">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            _id={recipe._id}
            title={recipe.title}
            coverImage={recipe.coverImage}
            time={recipe.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
