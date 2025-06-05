import React, { useState } from 'react';

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
  // Track which input method is active
  const [inputMethod, setInputMethod] = useState<'text' | 'file'>('text');

  // Wrapper for text change to update input method
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() !== '') {
      setInputMethod('text');
    }
    onTextChange(e);
  };

  // Wrapper for file upload to update input method
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setInputMethod('file');
    }
    onFileUpload(e);
  };

  // Clear input handler
  const clearInput = () => {
    // For text area, we pass an event with empty value
    const emptyEvent = {
      target: { value: '' }
    } as React.ChangeEvent<HTMLTextAreaElement>;
    onTextChange(emptyEvent);
  };

  return (
    <div className="bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg p-6 border border-indigo-100" 
         style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))'}}>
      <div className="mb-6 relative">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="policy-text" className="block text-sm font-medium text-indigo-800">
            Paste your Terms of Service or Privacy Policy below
          </label>
          {inputMethod === 'file' && (
            <button 
              onClick={() => setInputMethod('text')}
              className="text-xs text-indigo-600 hover:text-indigo-800"
            >
              Switch to text input
            </button>
          )}
        </div>
        <textarea
          id="policy-text"
          rows={10}
          className="w-full px-3 py-2 border border-indigo-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-60"
          style={{background: 'linear-gradient(135deg, rgba(233, 243, 255, 0.7), rgba(255, 237, 250, 0.7))'}}
          placeholder="Paste your legal text here..."
          value={inputText}
          onChange={handleTextChange}
          disabled={inputMethod === 'file'}
        />
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-indigo-800">
            Or upload a text file
          </label>
          {inputMethod === 'text' && inputText.trim() !== '' && (
            <button 
              onClick={() => setInputMethod('file')}
              className="text-xs text-indigo-600 hover:text-indigo-800"
            >
              Switch to file upload
            </button>
          )}
        </div>
        <input
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          className={`block w-full text-sm ${
            inputMethod === 'text' && inputText.trim() !== '' 
              ? 'opacity-50 cursor-not-allowed' 
              : 'text-indigo-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200'
          }`}
          disabled={inputMethod === 'text' && inputText.trim() !== ''}
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={clearInput}
          className="px-3 py-1 text-sm text-indigo-600 hover:text-indigo-800 border border-transparent hover:border-indigo-200 rounded-md"
          disabled={isLoading || inputText.trim() === ''}
        >
          Clear
        </button>
        
        <button
          onClick={onPeelClick}
          disabled={isLoading || !inputText.trim()}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all duration-200"
        >
          {isLoading ? 'Processing...' : 'Peel It! 🧠'}
        </button>
      </div>
    </div>
  );
};

export default TextInput; 