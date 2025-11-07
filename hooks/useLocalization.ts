// Fix: Import 'React' to be able to use React.createElement.
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../services/constants';

interface LocalizationContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: keyof typeof TRANSLATIONS.en) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  const t = useCallback((key: keyof typeof TRANSLATIONS.en): string => {
    return TRANSLATIONS[language][key] || TRANSLATIONS.en[key];
  }, [language]);

  // Fix: Replaced JSX with React.createElement because JSX syntax is not allowed in .ts files.
  // This resolves the syntax errors which caused cascading type errors in other files.
  return React.createElement(LocalizationContext.Provider, { value: { language, setLanguage, t } }, children);
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
