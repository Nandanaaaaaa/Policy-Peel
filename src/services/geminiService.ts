import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize with your API key (store securely in .env for real projects)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Types for our API responses
export interface SummaryItem {
  type: 'safe' | 'warning' | 'danger';
  text: string;
}

/**
 * Cleans text by removing bullet points and leading/trailing whitespace
 */
const cleanText = (text: string): string => {
  // Remove any bullet points (*, -, •, or numbers followed by dots)
  return text
    .replace(/^[\s*•\-–—]+|^\d+\.\s*/g, '')
    .replace(/^\[.*?\]\s*/g, '') // Remove any remaining category tags
    .trim();
};

/**
 * Summarizes text using the Gemini API and categorizes the results
 * @param text The text to summarize
 * @returns Array of categorized summary items
 */
export async function summarizeText(text: string): Promise<SummaryItem[]> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    // Create a prompt that instructs Gemini to summarize and categorize
    const prompt = `
      Summarize the following legal/policy text into key bullet points.
      For each point, categorize it as one of:
      - SAFE: for neutral or positive items
      - WARNING: for items that need attention or are somewhat concerning
      - DANGER: for concerning, potentially harmful, or very restrictive items
      
      Format each point as: "[CATEGORY]: point summary"
      DO NOT include bullet points, asterisks, or other markers at the beginning of each line.
      
      Here's the text to summarize:
      ${text}
    `;
    
    const result = await model.generateContent(prompt);
    const summaryText = result.response.text();
    
    // Parse the response into SummaryItem objects
    const summaryItems: SummaryItem[] = [];
    const lines = summaryText.split('\n').filter(line => line.trim().length > 0);
    
    for (const line of lines) {
      // Look for category prefixes in the response
      if (line.includes('SAFE:')) {
        summaryItems.push({
          type: 'safe',
          text: cleanText(line.replace(/SAFE:/, ''))
        });
      } else if (line.includes('WARNING:')) {
        summaryItems.push({
          type: 'warning',
          text: cleanText(line.replace(/WARNING:/, ''))
        });
      } else if (line.includes('DANGER:')) {
        summaryItems.push({
          type: 'danger',
          text: cleanText(line.replace(/DANGER:/, ''))
        });
      } else if (line.match(/^[-•*]\s*/) || line.length > 15) {
        // Handle bullets or longer text that might be summaries without proper categorization
        summaryItems.push({
          type: 'warning', // Default to warning for uncategorized points
          text: cleanText(line)
        });
      }
    }
    
    return summaryItems;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return [{ type: 'danger', text: 'Failed to generate summary. Please try again.' }];
  }
}

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