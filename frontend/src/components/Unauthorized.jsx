import React from "react";
import { ShieldAlert, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-red-50 p-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <ShieldAlert className="h-12 w-12 text-red-500" />
          </div>
        </div>

        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Access Denied
          </h1>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6"></div>

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

        <div className="bg-slate-50 px-8 py-4 text-center border-t">
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact support.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="h-2 bg-red-500"></div>
      </div>
    </div>
  );
};

export default Unauthorized;
