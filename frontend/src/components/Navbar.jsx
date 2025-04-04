import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  UtensilsCrossed,
  Heart,
  LogIn,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function Navbar({ onLogout, isLoggedIn }) {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav className="bg-white shadow-lg z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <UtensilsCrossed className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
            <span className="ml-2 text-lg md:text-2xl font-bold text-gray-800">
              Culinary Canvas
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              onClick={() => setActiveTab("home")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-base font-medium ${
                activeTab === "home"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>

            <Link
              to="/myrecipes"
              onClick={() => setActiveTab("recipes")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-base font-medium ${
                activeTab === "recipes"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              <UtensilsCrossed className="h-5 w-5" />
              <span>My Recipes</span>
            </Link>

            <Link
              to="/favorites"
              onClick={() => setActiveTab("favorites")}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-base font-medium ${
                activeTab === "favorites"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </Link>

            {/* Conditionally render Login/Logout button */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 px-4 py-2  bg-orange-500 text-white rounded-md hover:bg-red-600 transition duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            onClick={() => {
              setActiveTab("home");
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center px-4 py-3 text-base text-gray-700 hover:bg-orange-100"
          >
            <Home className="h-5 w-5 mr-2" />
            Home
          </Link>

          <Link
            to="/myrecipes"
            onClick={() => {
              setActiveTab("recipes");
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center px-4 py-3 text-base text-gray-700 hover:bg-orange-100"
          >
            <UtensilsCrossed className="h-5 w-5 mr-2" />
            My Recipes
          </Link>

          <Link
            to="/favorites"
            onClick={() => {
              setActiveTab("favorites");
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center px-4 py-3 text-base text-gray-700 hover:bg-orange-100"
          >
            <Heart className="h-5 w-5 mr-2" />
            Favorites
          </Link>

          {/* Conditionally render Login/Logout button for mobile */}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center px-4 py-3 text-base text-white bg-red-500 hover:bg-red-600"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-4 py-3 text-base text-white bg-orange-500 hover:bg-orange-600"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
