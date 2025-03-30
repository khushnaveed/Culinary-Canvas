import React, { useState, useEffect } from "react";
import { Mail, Lock } from "lucide-react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export function AuthForm({ onLogin, setRedirectPath }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) {
      setRedirectPath(location.state.from); // Store the previous path
    }
  }, [location, setRedirectPath]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "http://localhost:5000/user/login" : "http://localhost:5000/user/signUp";

    try {
      const response = await axios.post(url, { email, password });
      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        onLogin(); // Call the onLogin callback from App.js to update the logged-in state
        if (location.state?.from) {
          navigate(location.state.from); // Redirect to the path they came from
        } else {
          navigate("/"); // Default redirect to home
        }
      }
      setMessage(`${isLogin ? "Login" : "Signup"} successful! 🎉`);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >
      <div className="absolute inset-0 bg-black/25 flex items-center justify-center z-0"></div>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back" : "Create Your Account"}
        </h2>
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                id="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder={isLogin ? "Enter your password" : "Create a password"}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-500 hover:text-orange-600 underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}
