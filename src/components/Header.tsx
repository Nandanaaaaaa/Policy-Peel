import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">🧠 Policy Peel</h1>
        <p className="mt-1 text-sm text-gray-500">Simplify complex legal terms into plain English</p>
      </div>
    </header>
  );
};

export default Header; 