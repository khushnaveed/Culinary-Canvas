import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ChefHat,
  Clock,
  ImagePlus,
  ListOrdered,
  Loader2,
  UtensilsCrossed,
} from "lucide-react";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const ingredientsArray = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim())
      .filter(Boolean);

    const instructionsArray = instructions
      .split("\n")
      .map((instruction) => instruction.trim())
      .filter(Boolean);

    const recipeData = {
      title,
      time: parseInt(time, 10),
      ingredients: ingredientsArray,
      instructions: instructionsArray,
      coverImage: imageUrl,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/recipe",
        recipeData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        navigate("/myrecipes");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while adding the recipe."
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center ">
        <div className="bg-black/40 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <ChefHat className="h-12 w-12 text-white mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-white mb-4">
                Share Your Recipe
              </h1>
              <p className="text-xl text-gray-200">
                Share your culinary masterpiece with food lovers around the
                world
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <UtensilsCrossed className="h-5 w-5 text-red-500 mr-2" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-700 font-medium">Recipe Title</span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 text-sm p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:outline-none focus:ring focus:ring-amber-200"
                  placeholder="e.g., Homemade Chocolate Chip Cookies"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Cooking Time (minutes)
                  </div>
                </span>
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-1 text-sm p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:outline-none focus:ring focus:ring-amber-200"
                  placeholder="E.g., 30"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium">
                  <div className="flex items-center">
                    <ListOrdered className="h-4 w-4 mr-1" />
                    Ingredients
                  </div>
                </span>
                <p className="text-sm text-gray-500 mb-2">
                  Enter each ingredient, separated by commas
                </p>
                <textarea
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  rows={4}
                  className="mt-1 text-sm p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:outline-none focus:ring focus:ring-amber-200"
                  placeholder="E.g., 2 cups flour, 1 cup sugar, 2 eggs"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium">Instructions</span>
                <p className="text-sm text-gray-500 mb-2">
                  Enter each step on a new line
                </p>
                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  rows={6}
                  className="mt-1 text-sm p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:outline-none focus:ring focus:ring-amber-200"
                  placeholder="1. Preheat oven to 350°F&#10;2. Mix dry ingredients&#10;3. Add wet ingredients"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium">
                  <div className="flex items-center">
                    <ImagePlus className="h-4 w-4 mr-1" />
                    Cover Image URL
                  </div>
                </span>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="mt-1 text-sm p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:outline-none focus:ring focus:ring-amber-200"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </label>
            </div>

            <div className="flex items-center justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => navigate("/myrecipes")}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="m-3 fspace-x-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Adding Recipe...
                  </>
                ) : (
                  "Add Recipe"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
