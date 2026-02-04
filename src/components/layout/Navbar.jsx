import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ data, onLanguageToggle, currentLang }) {
  const [isOpen, setIsOpen] = useState(false);

  // Removed 'wishes' from this array as requested
  // Added hardcoded fallbacks so text NEVER disappears
  const navLinks = [
    { id: 'hero', label: data?.home || (currentLang === 'en' ? 'Home' : 'होम') },
    { id: 'events', label: data?.events || (currentLang === 'en' ? 'Events' : 'कार्यक्रम') },
    { id: 'gallery', label: data?.gallery || (currentLang === 'en' ? 'Gallery' : 'गॅलरी') },
    { id: 'family', label: data?.family || (currentLang === 'en' ? 'Family' : 'परिवार') },
    { id: 'rsvp', label: data?.rsvp || (currentLang === 'en' ? 'RSVP' : 'आर.एस.व्ही.पी') },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-20 z-[9999] flex items-center justify-between px-6 bg-[#000b1e]/90 backdrop-blur-md border-b border-gold/10">
      {/* Brand Logo */}
      <div className="text-gold font-serif font-bold text-2xl tracking-tighter cursor-pointer" onClick={() => scrollToSection('hero')}>
        A & R
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8">
        {navLinks.map((link) => (
          <button 
            key={link.id} 
            onClick={() => scrollToSection(link.id)}
            className="uppercase font-semibold text-sm tracking-widest text-white hover:text-gold transition-all duration-300" 
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Language Switcher & Mobile Toggle */}
      <div className="flex items-center gap-4 relative z-[10000]">
        <button 
          onClick={onLanguageToggle} 
          className="text-gold border border-gold/40 px-4 py-1 rounded-full text-[10px] font-black tracking-widest hover:bg-gold hover:text-[#000b1e] transition-all"
        >
          {currentLang === 'en' ? 'मराठी' : 'English'}
        </button>
        
        <button className="lg:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-gold" /> : <Menu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#000b1e] z-[9998] flex flex-col items-center justify-center gap-10 lg:hidden animate-in fade-in duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)}
              className="text-3xl uppercase tracking-[0.2em] text-white hover:text-gold font-serif transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}