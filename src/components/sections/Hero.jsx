import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

export default function Hero({ data }) {
  if (!data) return null;

  // Parallax effect for the background
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative h-[100dvh] w-full overflow-hidden bg-[#0a0a0a] -mt-16">
      {/* --- BACKGROUND LAYER --- */}
      <motion.div 
        style={{ y: y1 }} 
        className="absolute inset-0 z-0"
      >
        <picture>
          {/* Mobile Image: Vertical 9:16 aspect ratio */}
          <source
            media="(max-width: 768px)"
            srcSet={data.heroImageMobile || "/images/mobi.webp"}
          />
          {/* Desktop Image: Horizontal 16:9 aspect ratio */}
          <img
            src={data.heroImageDesktop || "/images/desktop.jpg"}
            alt="Wedding Hero"
            className="h-full w-full object-cover brightness-[0.85]"
          />
        </picture>
        
        {/* Artistic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* --- DESIGNER FRAME (Visible on Desktop) --- */}
      <div className="absolute inset-6 border border-white/20 z-10 pointer-events-none hidden md:block" />

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-16"
      >
        {/* Save The Date Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 border border-[#d4af37]/50 rounded-full text-[#d4af37] text-xs md:text-sm tracking-[0.4em] uppercase backdrop-blur-sm bg-black/20">
            Save the Date
          </span>
        </motion.div>

        {/* The Names (Main Heading) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-2 drop-shadow-2xl">
            {data.coupleNames || "Rohan & Aditi"}
          </h1>
          <div className="h-[1px] w-24 md:w-48 bg-[#d4af37] mx-auto my-6" />
        </motion.div>

        {/* Date & Location Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-white/90"
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#d4af37]" />
            <span className="text-lg md:text-xl font-light tracking-widest uppercase">
              {data.date || "24 . 12 . 2025"}
            </span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#d4af37]" />
            <span className="text-lg md:text-xl font-light tracking-widest uppercase">
              {data.location || "Udaipur, Rajasthan"}
            </span>
          </div>
        </motion.div>

        {/* Decorative Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-white italic font-serif text-sm md:text-lg max-w-xs md:max-w-md"
        >
          "In the middle of a dream, we found each other."
        </motion.p>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <p className="text-[10px] text-white/50 tracking-[0.3em] uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white/50 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
