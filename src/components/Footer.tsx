import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-opacity-60 backdrop-blur-md shadow-lg"
            style={{background: 'linear-gradient(to right, rgba(225, 238, 250, 0.7), rgba(193, 211, 254, 0.7))'}}>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-indigo-700">
          Policy Peel — Powered by Gemini AI
        </p>
      </div>
    </footer>
  );
};

export default Footer; 