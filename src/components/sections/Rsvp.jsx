import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Rsvp({ data }) {
  const [formData, setFormData] = useState({ name: '', guests: '1' });
  const [loveCount, setLoveCount] = useState(1000);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleLoveClick = () => {
    setLoveCount(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Sending...');
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwTMgan2lMMY-5StkMljNM2CoFd45WN9S6g_JZ17t82FlRQ__oNsDt4KnWCtlpppM3kjw/exec'; 

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
      });
      setSubmitStatus('Details Saved! ♥');
      setFormData({ name: '', guests: '1' });
    } catch (error) {
      setSubmitStatus('Details Sent!');
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-[#000b1e] text-white border-t border-gold/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        

        
        {/* --- GUEST FORM --- */}
        <div className="bg-white/5 p-8 rounded-3xl border border-gold/20 backdrop-blur-md text-left shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gold/80 text-xs mb-2 uppercase tracking-[0.2em] font-semibold">Full Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#000b1e]/50 border border-gold/30 rounded-xl px-4 py-4 text-white focus:border-gold outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gold/80 text-xs mb-2 uppercase tracking-[0.2em] font-semibold">Number of Guests</label>
              <input
                required
                type="number"
                min="1"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-[#000b1e]/50 border border-gold/30 rounded-xl px-4 py-4 text-white focus:border-gold outline-none transition-all"
              />
            </div>

            <motion.button
  type="submit"
  whileHover={{ 
    scale: 1.02, 
    // We use a dark background so the gold text stays visible
    backgroundColor: "#00153d", 
    color: "#d4af37", // Text stays Gold
    borderColor: "#d4af37",
    boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)" 
  }}
  whileTap={{ scale: 0.98 }}
  className="w-full bg-transparent border-2 border-gold text-gold font-black py-4 rounded-xl transition-colors duration-300 uppercase tracking-widest text-sm"
>
  Confirm RSVP Details
</motion.button>

            {submitStatus && (
              <p className="text-center mt-4 text-gold font-medium animate-pulse">
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}