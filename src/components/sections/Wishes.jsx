import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Wishes({ data }) {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [loveCount, setLoveCount] = useState(1000);
  const [status, setStatus] = useState(''); // To show "Sending..." or "Sent!"

  // 1. Handle Counter
  const handleLoveClick = () => {
    setLoveCount(prev => prev + 1);
  };

  // 2. Handle Form Submission to Google Sheets
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const scriptURL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL'; // PASTE YOUR URL HERE

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
      });
      if (response.ok) {
        setStatus('Wish Sent Successfully! ♥');
        setFormData({ name: '', message: '' });
      }
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('Error. Please try again.');
    }
  };

  if (!data) return null;

  return (
    <section id="wishes" className="py-20 bg-[#000b1e] text-white border-t border-gold/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gold">
          {data.title || "Best Wishes"}
        </h2>
        <p className="text-stone-400 mb-12">Leave a beautiful message for the couple</p>

        {/* --- LOVE COUNTER BUTTON --- */}
        <div className="mb-16">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleLoveClick}
            className="bg-gradient-to-r from-gold/80 to-gold text-[#000b1e] font-bold px-8 py-4 rounded-full shadow-lg shadow-gold/20 flex flex-col items-center mx-auto"
          >
            <span className="text-sm uppercase tracking-widest">Love to attend wed click here</span>
            <span className="text-2xl mt-1">❤ {loveCount}</span>
          </motion.button>
        </div>

        {/* --- WISH FORM --- */}
        <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-2xl border border-gold/20 backdrop-blur-sm text-left">
          <div className="mb-6">
            <label className="block text-gold text-sm mb-2 uppercase tracking-widest font-medium">Your Name</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#000b1e] border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold outline-none transition-all"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gold text-sm mb-2 uppercase tracking-widest font-medium">Your Message</label>
            <textarea
              required
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#000b1e] border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold outline-none transition-all"
              placeholder="Write your wishes here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-[#000b1e] font-bold py-3 rounded-lg transition-all duration-300 uppercase tracking-widest"
          >
            Send Wish
          </button>

          {status && (
            <p className="text-center mt-4 text-sm italic text-gold/80 animate-pulse">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}