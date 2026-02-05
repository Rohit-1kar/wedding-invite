import React, { useState } from "react";
import { Share2, MessageCircle, Copy, Check } from "lucide-react";
import { useContent } from "../../hooks/useContent"; 

const Footer = () => {
  const { content } = useContent(); 
  const { marketing } = content;
  
  const [copied, setCopied] = useState(false);

  // --- Updated Share Logic ---
  const liveWebsiteUrl = "https://royal-black.netlify.app/";

  // ==========================================
  // 2. WHATSAPP SHARE LOGIC (Direct & Fast)
  // ==========================================
  const shareOnWhatsApp = () => {
    // ✨ is \u2728, 💍 is \ud83d\udc8d
    const sparkles = "\u2728";
    const ring = "\ud83d\udc8d";
    
    const fullMessage = `**Wedding Invitation** \n\n` +
                        `We are happy to invite you to the wedding of *Sophia & Alexander*! \n\n` +
                        `Check the invitation here:\n${liveWebsiteUrl}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // --- 3. COPY LINK LOGIC ---
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(liveWebsiteUrl);
      setCopied(true);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = liveWebsiteUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=10&color=000000&bgcolor=FFFFFF&data=${encodeURIComponent(marketing.whatsappLink)}`;

  return (
    <footer className="relative pt-20 pb-10 bg-[#000b1e] text-stone-300 overflow-hidden font-sans border-t border-white/5">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gold to-transparent opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* SHARE SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-12 mb-16 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif text-white mb-2">{marketing.shareTitle}</h3>
            <p className="text-stone-500 text-sm tracking-widest uppercase">Invite friends & family with one click</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            
            {/* WHATSAPP BUTTON */}
            <button
              onClick={shareOnWhatsApp}
              className="group cursor-pointer flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg bg-green-600 text-white hover:bg-green-500 active:scale-95"
            >
              <Share2 size={20} />
              <span>WhatsApp</span>
            </button>

            {/* COPY BUTTON */}
            <button
              onClick={copyToClipboard}
              className="cursor-pointer flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold border border-white/10 transition-all hover:bg-white/5 hover:border-white/30 w-full sm:w-auto active:scale-95 text-white"
            >
              {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
              <span>{copied ? "Link Copied" : "Copy Link"}</span>
            </button>
          </div>
        </div>

        {/* DEVELOPER MARKETING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="text-3xl font-serif font-bold mb-4 text-white">InviteDev.in</h4>
            <p className="text-stone-400 mb-6 leading-relaxed text-sm opacity-90">{marketing.tagline}</p>
            <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-widest text-gold uppercase">
              {marketing.trust.split("•").map((item, index) => (
                <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">{item.trim()}</span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Our Services</h5>
            <ul className="space-y-4">
              {marketing.services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-stone-400 text-sm group hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-linear-to-br from-white/10 to-white/5 p-px rounded-2xl shadow-2xl relative group">
             <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
             <div className="bg-[#151515] rounded-xl p-6 flex flex-col items-center text-center h-full relative z-10">
                <p className="text-xs font-bold text-stone-400 mb-4 uppercase tracking-widest">{marketing.ctaTitle}</p>
                <a
                  href={marketing.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 mb-6 rounded-lg font-bold shadow-lg transition-all hover:brightness-110 active:scale-95 bg-primary text-white hover:bg-white hover:text-[#000b1e]"
                >
                  <MessageCircle size={18} />
                  {marketing.ctaBtn}
                </a>
                <div className="flex items-center gap-4 bg-white p-2 rounded-lg w-full mt-auto">
                  <div className="bg-white p-1 rounded-md border border-stone-200 shrink-0">
                    <img src={qrUrl} alt="Scan to Chat" className="w-14 h-14 object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-stone-900 font-extrabold uppercase mb-0.5">Scan to Chat</p>
                    <p className="text-[9px] text-stone-500 leading-tight">Open camera & scan to start WhatsApp chat instantly.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-stone-600 text-xs">{marketing.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
