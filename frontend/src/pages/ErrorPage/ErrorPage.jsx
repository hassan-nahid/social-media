import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#282828] px-6">
      <div className="bg-[#1A1A1A] text-[#FAFAFA] rounded-2xl p-10 max-w-lg w-full shadow-2xl text-center">
        <h1 className="text-7xl font-extrabold text-[#FFFD02] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-[#FFFFFF80] mb-6">
          The page you are looking for doesn't exist or might have been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#FFFD02] text-black font-bold px-6 py-3 rounded-xl hover:brightness-90 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
