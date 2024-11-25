import React from 'react';

const UnderDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      {/* Icon */}
      <div className="flex items-center justify-center mb-8">
        <svg
          className="w-20 h-20 text-yellow-400 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M4.938 4.938l1.414 1.414m12.728 0l1.414-1.414M5 13H3m18 0h-2m-7 7v-2m4.243-4.243l1.414 1.414M6.343 17.657l-1.414 1.414M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        This Page is Under Development
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-300 text-center mb-8">
        We're working hard to bring this feature to you. Stay tuned for updates!
      </p>

      {/* Button to navigate elsewhere */}
      <button
        onClick={() => window.history.back()}
        className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
      >
        Go Back
      </button>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        © 2024 Your Company Name. All rights reserved.
      </footer>
    </div>
  );
};

export default UnderDevelopment;
