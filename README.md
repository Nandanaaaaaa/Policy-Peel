# 🧠 Policy Peel

Policy Peel is a simple web application designed to summarize complex legal terms and privacy policies into clear, easy-to-understand bullet points. It leverages the free Gemini 2.0 Flash API for natural language summarization, providing users with concise plain-English explanations of legal text.

## Features

- **Simple Interface**: Paste text or upload a file containing legal terms
- **Smart Summarization**: Processes complex legal language into plain English
- **Categorized Results**: Color-coded bullet points to highlight important information:
  - ✅ Safe/Neutral points
  - ⚠️ Warnings/Points needing attention
  - ❌ Red flags/Concerning clauses
- **Client-side Processing**: All text processing happens in your browser for privacy

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Policy-Peel.git
   cd Policy-Peel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Paste your Terms of Service or Privacy Policy text into the text area
2. Alternatively, upload a .txt file containing the legal text
3. Click the "Peel It! 🧠" button
4. Review the summarized bullet points, categorized by safety level

## Technology Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **API**: Gemini 2.0 Flash (Free Tier)

## Project Structure

```
Policy-Peel/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── services/      # API and utility services
│   │   └── geminiService.ts  # Gemini API integration
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.tsx       # Application entry point
├── index.html         # HTML template
└── package.json       # Project dependencies and scripts
```

## Future Enhancements

- Export summaries to PDF/Markdown
- Save previous summaries to LocalStorage
- Highlight specific sections of concern in the original text
- Add support for more document formats (PDF, DOC)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Gemini 2.0 Flash API for natural language processing capabilities
- The open-source community for the amazing tools that made this project possible
