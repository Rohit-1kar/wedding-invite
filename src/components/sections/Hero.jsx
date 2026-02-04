import { motion } from 'framer-motion';

export default function Hero({ data }) {
  if (!data) return null;

  // Define attractive colors for the twinkling dots
  const starColors = ["#d4af37", "#ffffff", "#818cf8", "#fde047"];

  return (
    <section className="relative h-[calc(100vh-110px)] w-full flex flex-col items-center justify-center bg-[#000b1e] overflow-hidden">
      
      {/* --- ENHANCED MULTI-COLOR BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Animated Multi-color Stars - Increased count and size */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.3, 1] 
            }}
            transition={{ 
              duration: Math.random() * 5 + 3, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              // INCREASED SIZE: Randomly between 4px and 8px
              width: `${Math.random() * 4 + 4}px`, 
              height: `${Math.random() * 4 + 4}px`,
              backgroundColor: starColors[i % starColors.length],
              // STRONGER GLOW: Increased blur and opacity
              boxShadow: `0 0 12px ${starColors[i % starColors.length]}aa`, 
            }}
          />
        ))}

        {/* Soft Background Glows */}
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#d4af37]/10 blur-[120px]" />
        <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px]" />
        
        {/* Center Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#000b1e_90%)]" />
      </div>

      {/* --- CONTENT --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <p className="text-[#d4af37] uppercase tracking-[0.4em] text-xs md:text-sm font-medium mb-6">
          {data.greeting || "THE WEDDING OF"}
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          {data.couple}
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8 opacity-80">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-[#d4af37] text-xl">♥</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        <p className="text-xl md:text-2xl text-stone-300 italic font-light tracking-wide">
          {data.date}
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-[#d4af37]/60 text-[10px] tracking-[0.3em] uppercase"
      >
        Scroll Down
      </motion.div>
    </section>
  );
}