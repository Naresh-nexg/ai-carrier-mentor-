
import React from 'react';
import LanguageSelector from './LanguageSelector';
import { useLocalization } from '../services/hooks/useLocalization';

const Header: React.FC = () => {
  const { t } = useLocalization();

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 p-4 border-b border-gray-800">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-500 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight">
            {t('title')}
          </h1>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
