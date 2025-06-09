<div align="center">
<h1> 🧾 Policy Peel
</h1>
</div>

<div align="center">

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Transform complex legal terms into clear, actionable bullet points.**

[Features](#-features) • [Quick Start](#-quick-start) • [Tech Stack](#-tech-stack) • [Roadmap](#-roadmap)

</div>

---

## ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3>💬 Simple Input</h3>
      <ul>
        <li>Paste text directly</li>
        <li>Upload .txt files</li>
        <li>Clean, minimalist interface</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🔍 Smart Analysis</h3>
      <ul>
        <li>AI-powered summarization</li>
        <li>Processes complex legal language</li>
        <li>Client-side for privacy</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🚦 Clear Categories</h3>
      <ul>
        <li>✅ Safe/Neutral points</li>
        <li>⚠️ Warnings/Points needing attention</li>
        <li>❌ Red flags/Concerning clauses</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🔄 Easy Workflow</h3>
      <ul>
        <li>One-click processing</li>
        <li>Copy results with a single click</li>
        <li>Future export options</li>
      </ul>
    </td>
  </tr>
</table>

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm (v6+)
- [Gemini API key](https://aistudio.google.com/app/apikey)

### Setup

```bash
# Clone repository
git clone https://github.com/yourusername/Policy-Peel.git
cd Policy-Peel

# Install dependencies
npm install

# Add API key to .env file
echo "VITE_GEMINI_API_KEY=your_gemini_api_key_here" > .env

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 🔧 Tech Stack

<table>
  <tr>
    <th>Category</th>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>React 19 + TypeScript</td>
    <td>UI components and type safety</td>
  </tr>
  <tr>
    <td>Styling</td>
    <td>Tailwind CSS 4</td>
    <td>Utility-first styling</td>
  </tr>
  <tr>
    <td>Build Tool</td>
    <td>Vite 6</td>
    <td>Fast development and optimized builds</td>
  </tr>
  <tr>
    <td>AI</td>
    <td>Gemini 2.0 Flash API</td>
    <td>Natural language processing</td>
  </tr>
</table>

## 📁 Project Structure

```
Policy-Peel/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # React components
│   ├── services/      # API and utility services
│   └── main.tsx       # Application entry point
├── index.html         # HTML template
└── package.json       # Dependencies and scripts
```

## 🔮 Roadmap

- 📊 Export summaries to PDF/Markdown
- 💾 Save previous summaries to LocalStorage
- 🔎 Highlight specific sections of concern
- 📄 Support for more document formats (PDF, DOC)

## 📄 License

MIT License

## 🙏 Acknowledgments

- [Gemini 2.0 Flash API](https://ai.google.dev/) for natural language processing
- Open-source community for amazing tools and libraries
