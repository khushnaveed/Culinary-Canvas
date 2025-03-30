import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState("");  // Ingredients as a string
  const [instructions, setInstructions] = useState("");  // Instructions as a string
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Convert ingredients and instructions to arrays
    const ingredientsArray = ingredients.split(",").map((ingredient) => ingredient.trim());
    const instructionsArray = instructions.split("\n").map((instruction) => instruction.trim());

    // Prepare the recipe data
    const recipeData = {
      title,
      time,
      ingredients: ingredientsArray,  // Store ingredients as an array
      instructions: instructionsArray,  // Store instructions as an array
      coverImage: imageUrl,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/recipe",
        recipeData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token for authentication
          },
        }
      );

      // On success, navigate to the "My Recipes" page or display a success message
      if (response.status === 200) {
        setLoading(false);
        navigate("/myrecipes"); // Redirect to My Recipes page after successful submission
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response?.data?.message ||
          "An error occurred while adding the recipe."
      );
    }
  };

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >
      <div className="absolute inset-0 bg-black/25 flex items-center justify-center z-0"></div>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-center mb-6">Add Your Recipe</h2>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter the recipe title"
              required
            />
          </div>

          {/* Time Input */}
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Time
            </label>
            <input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter the time required"
              required
            />
          </div>

          {/* Ingredients Input */}
          <div>
            <label
              htmlFor="ingredients"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ingredients (comma-separated)
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter ingredients, separated by commas"
              required
            />
          </div>

          {/* Instructions Input */}
          <div>
            <label
              htmlFor="instructions"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Instructions (one per line)
            </label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter instructions, separated by new lines"
              required
            />
          </div>

          {/* Cover Image Input */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cover Image URL
            </label>
            <input
              type="text"
              id="image"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter the image URL"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Adding Recipe..." : "Add Recipe"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
