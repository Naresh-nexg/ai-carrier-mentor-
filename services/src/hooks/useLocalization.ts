// src/hooks/useLocalization.ts

import React, { useState, useContext, ReactNode, useCallback } from 'react';
import { TRANSLATIONS } from '../constants';
import { LanguageCode } from '../types';

// Step 1: Define the TFunction Interface
interface TFunction {
  (key: keyof typeof TRANSLATIONS['en']): string;
}

type LocalizationContextType = {
  t: TFunction;
  language: LanguageCode;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageCode>>;
};

// Define Context and Provider (use undefined default and runtime guard)
const LocalizationContext = React.createContext<LocalizationContextType | undefined>(undefined);

// ...existing code...
export const LocalizationProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  // Step 2: Define t using the TFunction interface
  const t = useCallback((key: keyof typeof TRANSLATIONS['en']): string => {
    const value = TRANSLATIONS[language]?.[key];
    return typeof value === 'string' ? value : (key as string);
  }, [language]);

  return (
    <LocalizationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};
// ...existing code...

// Custom hook to access localization values (with guard)
export const useLocalization = () => {
  const ctx = useContext(LocalizationContext);
  if (!ctx) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return ctx;
};