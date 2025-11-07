// ...existing code...
import React, { useState, useContext, useCallback } from 'react';
import { TRANSLATIONS } from "../../constants";
import { LanguageCode } from '../../types';

// Step 1: Define the TFunction Interface
interface TFunction {
  (key: keyof typeof TRANSLATIONS['en']): string;
}

type LocalizationContextType = {
  t: TFunction;
  language: LanguageCode;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageCode>>;
};

const LocalizationContext = React.createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

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

export const useLocalization = () => {
  const ctx = useContext(LocalizationContext);
  if (!ctx) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return ctx;
};
// ...existing code...