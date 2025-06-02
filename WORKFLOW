# 🧾 Policy Peel — Workflow Documentation

## Overview
Policy Peel is a lightweight web tool designed to summarize legal terms and privacy policies into readable bullet points. It helps users understand what they're agreeing to — without reading the entire legal document.

This document outlines how the app works from a user's perspective and how each core feature interacts behind the scenes.

---

## 🧑‍💻 User Workflow

### 1. Upload / Paste Terms
- User visits the Policy Peel web app.
- Options:
  - Paste full Terms of Service / Privacy Policy in a text box.
  - Upload .txt file (optional feature).
  
### 2. Hit “Peel It” (Summarize)
- On click:
  - The raw input is split into logical chunks (based on headers or paragraph breaks).
  - Each chunk is sent to the Gemini Pro API for summarization.
  
### 3. TL;DR Display
- Gemini returns summaries of each section.
- Output is rendered as:
  - ✅ Positive or neutral bullet points
  - ❌ Red flags or concerning clauses
  - ⚠ Warnings or vague terms

### 4. User Actions
- Copy TL;DR summary
- Download as .txt (future feature)
- Export to Markdown / PDF (future feature)
- Re-run summary with different chunking (optional)

---

## Admin / Developer Workflow

### 📦 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
4