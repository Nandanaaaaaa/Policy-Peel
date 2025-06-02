// Types for our API responses
export interface SummaryItem {
  type: 'safe' | 'warning' | 'danger';
  text: string;
}

// This is a placeholder for the actual Gemini API integration
// In a real implementation, you would need to:
// 1. Get an API key from Google's Gemini platform
// 2. Make proper API calls with error handling
// 3. Process the responses appropriately

export const summarizeText = async (text: string): Promise<SummaryItem[]> => {
  // For demonstration purposes, we're simulating an API call
  // In a real implementation, you would call the Gemini API here
  console.log('Processing text chunk:', text.substring(0, 100) + '...');
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // This is where you would make the actual API call to Gemini
  // const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${API_KEY}`
  //   },
  //   body: JSON.stringify({
  //     contents: [{
  //       parts: [{
  //         text: `Summarize the following legal text into clear, easy-to-understand bullet points. 
  //                Categorize each point as either SAFE (✅), WARNING (⚠️), or DANGER (❌).
  //                SAFE points are neutral or positive for the user.
  //                WARNING points require caution or attention.
  //                DANGER points are potentially harmful or very concerning.
  //                Here's the text to summarize: ${text}`
  //       }]
  //     }]
  //   })
  // });
  // const data = await response.json();
  // Process the response and extract the categorized bullet points
  
  // For now, return mock data based on keywords in the text
  const mockResults: SummaryItem[] = [];
  
  // Simple keyword-based classification for demonstration
  if (text.toLowerCase().includes('cancel') || text.toLowerCase().includes('terminate')) {
    mockResults.push({ 
      type: 'safe', 
      text: 'You can cancel your subscription at any time.' 
    });
  }
  
  if (text.toLowerCase().includes('data') && text.toLowerCase().includes('share')) {
    mockResults.push({ 
      type: 'warning', 
      text: 'Your data may be shared with third-party partners.' 
    });
  }
  
  if (text.toLowerCase().includes('change') && text.toLowerCase().includes('terms')) {
    mockResults.push({ 
      type: 'danger', 
      text: 'The company reserves the right to change terms without notification.' 
    });
  }
  
  // If no keywords matched, provide some generic results
  if (mockResults.length === 0) {
    mockResults.push(
      { type: 'safe', text: 'Standard terms of service apply to your usage of the service.' },
      { type: 'warning', text: 'Some features may require additional permissions or data access.' },
      { type: 'danger', text: 'Violation of terms may result in account termination without notice.' }
    );
  }
  
  return mockResults;
};

// Function to chunk text for API processing (moved from App.tsx)
export const chunkText = (text: string): string[] => {
  // Simple chunking by paragraphs, keeping chunks under ~1000 tokens
  // This is a basic implementation and might need refinement
  const paragraphs = text.split(/\n\s*\n/);
  const chunks: string[] = [];
  let currentChunk = '';
  
  for (const paragraph of paragraphs) {
    // Rough estimate: 1 token ≈ 4 characters
    if ((currentChunk.length + paragraph.length) > 4000) {
      chunks.push(currentChunk);
      currentChunk = paragraph;
    } else {
      currentChunk += (currentChunk ? '\n\n' : '') + paragraph;
    }
  }
  
  if (currentChunk) {
    chunks.push(currentChunk);
  }
  
  return chunks;
}; 