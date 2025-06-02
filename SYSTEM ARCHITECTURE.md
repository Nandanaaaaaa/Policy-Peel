# 🧠 Policy Peel — System Architecture

## Overview
Policy Peel is a simple web application designed to summarize complex legal terms and privacy policies into clear, easy-to-understand bullet points. It leverages the free Gemini 2.0 Flash API for natural language summarization, providing users with concise plain-English explanations of legal text.

---

## Architecture Summary

User Interface (React)
↓
Text Processing & Chunking (Client-side)
↓
Gemini 2.0 Flash API (Free Tier)
↓
Summary Rendering & Categorization (Client-side)

---

## Technology Stack

| Layer                 | Technology / Tool        | Purpose                                  |
|-----------------------|-------------------------|------------------------------------------|
| Frontend Framework    | React + Vite             | Fast, reactive UI development            |
| Styling               | Tailwind CSS             | Utility-first CSS framework for styling  |
| Language              | TypeScript               | Type safety and maintainability          |
| API                   | Gemini 2.0 Flash (Free) | Natural language summarization API       |
| Data Storage          | LocalStorage (optional)  | Temporary client-side persistence        |

---

## Component Breakdown

### 1. Frontend (React + Vite + TypeScript)
- Single-page app with a minimal, user-friendly interface.
- Features:
  - Text area for users to paste or upload legal documents.
  - File input for .txt uploads.
  - Button to trigger the summarization process.
- Processes the raw input text locally:
  - Splits text into manageable chunks to comply with Gemini API token limits.
  - Applies basic keyword detection for initial categorization.
  
### 2. Text Chunker (Client-Side)
- Responsible for:
  - Splitting the input into smaller logical sections (~1000 tokens each).
  - Detecting section headers, paragraphs, or sentence boundaries.
- Ensures each chunk sent to Gemini API is within free tier limits.

### 3. Gemini 2.0 Flash API (Free Tier)
- Hosted by Google DeepMind, Gemini 2.0 Flash is used for text summarization.
- Key characteristics:
  - Handles up to ~8,000 tokens per request (approximate, varies).
  - Provides fast, high-quality natural language understanding and generation.
- The app sends each chunk with a prompt requesting a plain English summary emphasizing key points and risks.
- API calls are made client-side using an environment-protected API key.

### 4. Summary Renderer & Categorization (Client-Side)
- Receives summarized text chunks from Gemini.
- Applies heuristic rules (keywords, regex) to classify points as:
  - ✅ Safe/Neutral
  - ❌ Risky/Red Flags
  - ⚠ Warnings/Caution needed
- Renders bullet points with clear emojis for easy scanning by users.

### 5. Optional Persistence (LocalStorage)
- Temporarily stores the user's input and summaries to allow refreshing without data loss.
- No backend or server-side database is currently used, preserving privacy.

---
