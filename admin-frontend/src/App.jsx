import React from 'react';
// Ensure your main CSS file is imported, typically index.css or App.css
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-10 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Hello Tailwind CSS!
        </h1>
        <p className="text-green-600 text-lg">
          If this text is blue and bold, Tailwind CSS is working!
        </p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          Test Button
        </button>
      </div>
    </div>
  );
}
