import { useState, useEffect } from 'react';
import enContent from '../data/content.en.json';
import mrContent from '../data/content.mr.json';

export const useContent = () => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    // Listen for language changes from other components
    const handleLangChange = () => {
      setLang(localStorage.getItem('lang') || 'en');
    };
    window.addEventListener('langUpdated', handleLangChange);
    return () => window.removeEventListener('langUpdated', handleLangChange);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'mr' : 'en';
    localStorage.setItem('lang', nextLang);
    setLang(nextLang);
    // Notify all other instances of this hook to update
    window.dispatchEvent(new Event('langUpdated'));
  };

  const content = lang === 'en' ? enContent : mrContent;

  return { content, lang, toggleLanguage };
};