// src/types.ts

// --- 1. Required for App.tsx (The chat messages) ---
export interface Message {
  role: 'user' | 'model'; 
  text: string;
}

// --- 2. Required for constants.ts and useLocalization.ts ---

// Defines the list of valid language codes (e.g., 'en', 'ta')
export type LanguageCode = 'en' | 'ta' | 'te' | 'kn' | 'ml'; 

// Defines the structure of the language objects in LANGUAGES array
export interface Language {
  code: LanguageCode;
  name: string;
}

// Add any other types your combined app might use here (like JobDescription, etc.)