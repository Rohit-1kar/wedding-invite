import { useState, useEffect } from 'react';
import enContent from '../data/content.en.json';
import mrContent from '../data/content.mr.json';

export const useContent = () => {
  // Initialize from localStorage or default to 'en'
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    const handleLangChange = () => {
      setLanguage(localStorage.getItem('lang') || 'en');
    };
    window.addEventListener('langUpdated', handleLangChange);
    return () => window.removeEventListener('langUpdated', handleLangChange);
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'mr' : 'en';
    localStorage.setItem('lang', nextLang);
    setLanguage(nextLang);
    window.dispatchEvent(new Event('langUpdated'));
  };

  // Select content based on the current language state
  const content = language === 'en' ? enContent : mrContent;

  // We return 'language' to match what your RootComponent/Navbar uses
  return { content, language, toggleLanguage };
};
