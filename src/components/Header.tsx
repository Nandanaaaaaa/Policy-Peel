import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-opacity-60 backdrop-blur-md shadow-lg"
            style={{background: 'linear-gradient(to right, rgba(193, 211, 254, 0.7), rgba(225, 238, 250, 0.7))'}}>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-indigo-900">🧠 Policy Peel</h1>
        <p className="mt-1 text-sm text-indigo-700">Simplify complex legal terms into plain English</p>
      </div>
    </header>
  );
};

export default Header; 