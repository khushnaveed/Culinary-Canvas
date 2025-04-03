import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";
import { ChefHat, Loader2, PlusCircle, UtensilsCrossed } from "lucide-react";


const MyRecipes = () => {
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
     <div className="min-h-screen bg-gray-50 pb-12">
    {/* Hero Section */}
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <ChefHat className="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Recipe Collection</h1>
          <p className="text-xl text-gray-600 mb-8">Where Every Recipe Tells a Story</p>
          <button
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-200 shadow-md"
            onClick={() => navigate("/addrecipe")}
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            <span>Share Your Recipe</span>
          </button>
        </div>
      </div>
    </div>

    {/* Recipe Grid */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      {recipes.length === 0 ? (
        <div className="text-center bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
          <UtensilsCrossed className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Recipes Yet</h2>
          <p className="text-gray-600 mb-6">
            Start sharing your culinary masterpieces with the world!
          </p>
          <button
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-200"
            onClick={() => navigate("/addrecipe")}
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            <span>Create Your First Recipe</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="transform hover:scale-105 transition duration-200">
              <RecipeCard
                _id={recipe._id}
                title={recipe.title}
                coverImage={recipe.coverImage}
                time={recipe.time}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  );
};

export default MyRecipes;
