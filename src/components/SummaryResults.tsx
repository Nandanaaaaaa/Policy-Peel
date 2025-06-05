import type { SummaryItem } from '../services/geminiService';

interface SummaryResultsProps {
  summary: SummaryItem[];
}

const SummaryResults = ({ summary }: SummaryResultsProps) => {
  // Group summary items by type
  const safeItems = summary.filter(item => item.type === 'safe');
  const warningItems = summary.filter(item => item.type === 'warning');
  const dangerItems = summary.filter(item => item.type === 'danger');

  return (
    <div className="bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg p-6 border border-indigo-100"
         style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))'}}>
      <h2 className="text-xl font-semibold mb-4 text-indigo-900">Policy Peel Summary</h2>
      
      {/* Safe items */}
      {safeItems.length > 0 && (
        <div className="mb-6 rounded-md p-3" style={{backgroundColor: 'rgba(181, 234, 215, 0.3)'}}>
          <h3 className="text-lg font-medium text-green-700 mb-2">✅ Safe Points</h3>
          <ul className="space-y-2 pl-6 list-disc">
            {safeItems.map((item, index) => (
              <li key={`safe-${index}`} className="text-gray-700">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Warning items */}
      {warningItems.length > 0 && (
        <div className="mb-6 rounded-md p-3" style={{backgroundColor: 'rgba(255, 218, 193, 0.3)'}}>
          <h3 className="text-lg font-medium text-yellow-700 mb-2">⚠️ Warnings</h3>
          <ul className="space-y-2 pl-6 list-disc">
            {warningItems.map((item, index) => (
              <li key={`warning-${index}`} className="text-gray-700">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Danger items */}
      {dangerItems.length > 0 && (
        <div className="mb-6 rounded-md p-3" style={{backgroundColor: 'rgba(255, 207, 210, 0.3)'}}>
          <h3 className="text-lg font-medium text-red-700 mb-2">❌ Red Flags</h3>
          <ul className="space-y-2 pl-6 list-disc">
            {dangerItems.map((item, index) => (
              <li key={`danger-${index}`} className="text-gray-700">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Copy to clipboard button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => {
            const text = [
              ...safeItems.map(item => `✅ ${item.text}`),
              ...warningItems.map(item => `⚠️ ${item.text}`),
              ...dangerItems.map(item => `❌ ${item.text}`)
            ].join('\n');
            navigator.clipboard.writeText(text);
          }}
          className="px-3 py-1 text-sm text-indigo-600 hover:text-indigo-800 flex items-center border border-transparent hover:border-indigo-200 rounded-md transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          Copy Summary
        </button>
      </div>
    </div>
  );
};

export default SummaryResults; 