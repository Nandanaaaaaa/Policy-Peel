import React from 'react';

interface TextInputProps {
  inputText: string;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPeelClick: () => void;
  isLoading: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  inputText,
  onTextChange,
  onFileUpload,
  onPeelClick,
  isLoading
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-6">
        <label htmlFor="policy-text" className="block text-sm font-medium text-gray-700 mb-2">
          Paste your Terms of Service or Privacy Policy below
        </label>
        <textarea
          id="policy-text"
          rows={10}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Paste your legal text here..."
          value={inputText}
          onChange={onTextChange}
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Or upload a text file
        </label>
        <input
          type="file"
          accept=".txt"
          onChange={onFileUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onPeelClick}
          disabled={isLoading || !inputText.trim()}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'Peel It! 🧠'}
        </button>
      </div>
    </div>
  );
};

export default TextInput; 