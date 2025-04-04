import React from "react";
import { PlusCircle, ChefHat, Utensils, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function NoRecipesFound() {
  return (
    <>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.15",
        }}
      />
      <div className="flex flex-col items-center relative z-1 justify-center p-8 md:p-12 mx-auto max-w-3xl ">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 w-full max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-recipe-cream p-4">
              <ChefHat className="h-12 w-12 text-orange-500" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-recipe-brown mb-3">
            No Recipes Yet
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Your recipe collection is empty. Start adding your favorite recipes
            to create your personal cookbook.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4 shadow-md rounded-md bg-background/50">
              <Utensils className="h-8 w-8 text-orange-500 mb-2" />
              <p className="text-sm text-gray-600">Save family recipes</p>
            </div>
            <div className="flex flex-col items-center p-4 shadow-md  rounded-md bg-background/50">
              <Clock className="h-8 w-8 text-orange-500 mb-2" />
              <p className="text-sm text-gray-600">Quick meal planning</p>
            </div>
            <div className="flex flex-col items-center p-4 shadow-md rounded-md bg-background/50">
              <ChefHat className="h-8 w-8 text-orange-500 mb-2" />
              <p className="text-sm text-gray-600">Cooking made easy</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to="/addrecipe"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition flex items-center"
            >
              <PlusCircle className="mr-2 h-5 w-5 text-white" />
              Add Your First Recipe
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoRecipesFound;
