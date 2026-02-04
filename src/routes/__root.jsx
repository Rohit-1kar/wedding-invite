import { useEffect } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useContent } from '../hooks/useContent.js';
import Navbar from '../components/layout/Navbar.jsx';
import MusicPlayer from '../components/ui/MusicPlayer.jsx';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { content, language, toggleLanguage } = useContent();

  useEffect(() => {
  // Security only activates if the site is NOT running on your computer
  const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

  if (!isLocal) {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }
}, []);

  return (
    // Note: Removed 'select-none' so you can inspect elements more easily
    <div className="min-h-screen flex flex-col font-sans bg-[#000b1e]"> 
      
      <Navbar 
    data={content.nav} // Ensure your JSON has a "nav" object
    currentLang={language} 
    onLanguageToggle={toggleLanguage} 
  />

      <main className="flex-grow">
        <Outlet /> 
      </main>

      <MusicPlayer audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      
      {/* Footer updated to Royal Blue Theme */}
      <footer className="py-10 text-center bg-[#000814] border-t border-gold/10 text-white/30 text-sm">
        <p className="mb-2">© 2026 Aditi & Rohan</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold/50">
          Digital Invite Protected by InviteDev.in
        </p>
      </footer>
    </div>
  );
}
