import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipePage = () => {
  const { id } = useParams(); // Extract ID from URL
  const [recipe, setRecipe] = useState(null); // Store recipe data
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    setLoading(true); // Ensure loading starts
    axios
      .get(`http://localhost:5000/recipe/${id}`) // Fetch recipe by ID
      .then((response) => {
        setTimeout(() => {
          setRecipe(response.data.data); // Store data in state after 2 sec
          setLoading(false); // Stop loading
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching the recipe:", error);
        setLoading(false); // Stop loading on error
      });
  }, [id]); // Re-fetch when ID changes

  // Skeleton loader while fetching data
  if (loading)
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div
          role="status"
          class="max-w-sm p-4 rounded-sm shadow-sm animate-pulse md:p-6"
        >
          <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm">
            <svg
              class="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>

          <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full"></div>
          <div class="flex items-center mt-4">
            <svg
              class="w-10 h-10 me-3 text-gray-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div>
              <div class="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
              <div class="w-48 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.coverImage}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600">{recipe.time} minutes</p>
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipePage;
