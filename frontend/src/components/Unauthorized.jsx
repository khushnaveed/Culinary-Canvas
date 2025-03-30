import React from "react";

const Unauthorized = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Unauthorized</h1>
        <p className="mt-4 text-lg text-gray-600">
          You must be logged in to view this page. Please{" "}
          <a
            href="/login"
            className="text-blue-500 hover:underline"
          >
            log in
          </a>{" "}
          first.
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
