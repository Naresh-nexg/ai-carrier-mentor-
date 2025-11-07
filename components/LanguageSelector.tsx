
import React, { useState } from 'react';
import { useLocalization } from '../services/hooks/useLocalization';
import { LANGUAGES } from '../services/constants';
import { LanguageCode } from '../services/types';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const selectedLanguage = LANGUAGES.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a8 8 0 015.407 13.52l-1.488-1.488A6 6 0 1010 4V2zM5.08 16.32A8.002 8.002 0 0110 2v2a6 6 0 00-4.234 9.947l-1.686 1.686a7.96 7.96 0 01.99-1.313zM10 18a8 8 0 01-5.407-13.52l1.488 1.488A6 6 0 1010 16v2z" />
          <path d="M14.92 3.68A8.002 8.002 0 0110 18v-2a6 6 0 004.234-9.947l1.686-1.686a7.96 7.96 0 01-.99 1.313z" />
        </svg>
      </button>
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-20"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-1">
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    language === lang.code
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
