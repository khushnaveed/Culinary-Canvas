import React from "react";
import { ShieldAlert, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
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
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center">
              <ShieldAlert className="h-12 w-12 text-orange-500" />
            </div>
          </div>

          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Access Denied
            </h1>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>

            <p className="text-gray-600 mb-8">
              You don't have permission to access this page. Please sign in with
              an authorized account to continue.
            </p>

            <div className="space-y-4 flex flex-col justify-center items-center">
              <button
                asChild
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition flex items-center"
              >
                <Link to="/login" className="flex items-center justify-center">
                  Sign In Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </button>

              <button
                asChild
                variant="outline"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition flex items-center"
              >
                <Link to="/">Return to Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unauthorized;
