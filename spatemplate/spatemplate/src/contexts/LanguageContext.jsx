import React, { createContext, useContext, useState } from 'react';
import { translations } from '../configs/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const value = {
    currentLanguage,
    setCurrentLanguage,
    t: (key) => {
      const keys = key.split('.');
      let result = translations[currentLanguage];
      for (const k of keys) {
        result = result?.[k];
      }
      return result || key;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 