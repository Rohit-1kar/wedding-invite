import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={audioUrl} loop />
      
      <button
        onClick={toggleMusic}
        className={`p-4 rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center ${
          isPlaying ? 'bg-rose-500 animate-spin-slow' : 'bg-stone-800'
        } text-white`}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Small label that appears when hovered */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-md text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Play Music
      </span>
    </div>
  );
}