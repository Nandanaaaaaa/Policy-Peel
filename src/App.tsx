import { useState, useEffect } from 'react'
import { chunkText, summarizeText, SummaryItem } from './services/geminiService';
import { loadInputText, loadSummary, saveInputText, saveSummary } from './services/storageService';
import SummaryResults from './components/SummaryResults';
import TextInput from './components/TextInput';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [inputText, setInputText] = useState<string>('');
  const [summary, setSummary] = useState<SummaryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Load saved data on component mount
  useEffect(() => {
    const savedText = loadInputText();
    const savedSummary = loadSummary();
    
    if (savedText) {
      setInputText(savedText);
    }
    
    if (savedSummary.length > 0) {
      setSummary(savedSummary);
    }
  }, []);
  
  // Function to handle text input
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setInputText(newText);
    saveInputText(newText);
  };
  
  // Function to handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        const fileText = event.target.result as string;
        setInputText(fileText);
        saveInputText(fileText);
      }
    };
    reader.readAsText(file);
  };
  
  // Function to process text through Gemini API
  const processWithGemini = async (text: string) => {
    setIsLoading(true);
    setSummary([]);
    
    try {
      const chunks = chunkText(text);
      const allResults: SummaryItem[] = [];
      
      // Process each chunk
      for (const chunk of chunks) {
        const chunkResults = await summarizeText(chunk);
        allResults.push(...chunkResults);
      }
      
      setSummary(allResults);
      saveSummary(allResults);
    } catch (error) {
      console.error('Error processing text:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };
  
  // Function to handle the "Peel It" button click
  const handlePeelClick = () => {
    if (inputText.trim()) {
      processWithGemini(inputText);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-grow">
        <div className="px-4 py-6 sm:px-0">
          <TextInput
            inputText={inputText}
            onTextChange={handleTextChange}
            onFileUpload={handleFileUpload}
            onPeelClick={handlePeelClick}
            isLoading={isLoading}
          />
          
          {/* Results Section */}
          {summary.length > 0 && (
            <div className="mt-8">
              <SummaryResults summary={summary} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
