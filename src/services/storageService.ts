import { SummaryItem } from './geminiService';

// Keys for localStorage
const STORAGE_KEYS = {
  INPUT_TEXT: 'policy_peel_input_text',
  SUMMARY: 'policy_peel_summary'
};

// Save input text to localStorage
export const saveInputText = (text: string): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.INPUT_TEXT, text);
  } catch (error) {
    console.error('Error saving input text to localStorage:', error);
  }
};

// Load input text from localStorage
export const loadInputText = (): string => {
  try {
    const savedText = localStorage.getItem(STORAGE_KEYS.INPUT_TEXT);
    return savedText || '';
  } catch (error) {
    console.error('Error loading input text from localStorage:', error);
    return '';
  }
};

// Save summary to localStorage
export const saveSummary = (summary: SummaryItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SUMMARY, JSON.stringify(summary));
  } catch (error) {
    console.error('Error saving summary to localStorage:', error);
  }
};

// Load summary from localStorage
export const loadSummary = (): SummaryItem[] => {
  try {
    const savedSummary = localStorage.getItem(STORAGE_KEYS.SUMMARY);
    return savedSummary ? JSON.parse(savedSummary) : [];
  } catch (error) {
    console.error('Error loading summary from localStorage:', error);
    return [];
  }
};

// Clear all saved data
export const clearStoredData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.INPUT_TEXT);
    localStorage.removeItem(STORAGE_KEYS.SUMMARY);
  } catch (error) {
    console.error('Error clearing data from localStorage:', error);
  }
}; 