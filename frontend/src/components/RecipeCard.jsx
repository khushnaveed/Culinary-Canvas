import { Clock } from "lucide-react"; // Importing icons from lucide-react
import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ _id, title, time, coverImage }) {
  return (
    <div className="recipe-card h-full rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      {/* <div className="recipe-card h-full rounded-lg shadow-md overflow-hidden"> */}
      {/* Recipe Image */}
      <div className="recipe-image-container relative h-50">
        <img
          src={coverImage}
          alt={title}
          className="recipe-image w-full h-48 md:h-50 object-cover"
          loading="lazy"
        />
      </div>

      {/* Recipe Details */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          {/* Time icon */}
          <Clock className="h-4 w-4 text-accent text-orange-500" />
          {/* Cooking time */}
          <span className="text-sm text-muted-foreground text-gray-500">
            {time}
          </span>
        </div>

        {/* Recipe Title */}
        <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>

        {/* View full recipe link */}
        <Link
          to={`/recipe/${_id}`}
          className="inline-block text-accent font-medium hover:underline text-orange-500"
        >
          View Full Recipe
        </Link>
      </div>
    </div>
  );
}
