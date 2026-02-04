import { Share2, Copy, MessageCircle } from 'lucide-react';

export default function Promotion() {
  const websiteUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(websiteUrl);
    alert("Link copied!");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Aditi & Rohan Wedding Invitation',
        url: websiteUrl,
      });
    }
  };

  return (
    <section className="bg-[#1a0f0a] text-stone-200 py-12 px-6 border-t border-stone-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Top Share Bar */}
        <div className="border border-stone-700 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold uppercase tracking-tight">Share this happiness</h3>
            <p className="text-stone-500 text-sm uppercase">Invite friends & family with one click</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button 
              onClick={handleShare}
              className="flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              <Share2 size={18} /> Share Invite
            </button>
            <button 
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-8 py-3 rounded-full font-bold border border-stone-600 transition-all"
            >
              <Copy size={18} /> Copy Link
            </button>
          </div>
        </div>

        {/* Bottom Info Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#d4a373]">InviteDev.in</h2>
            <p className="text-stone-400">Digital Wedding Invitations Made Simple</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-stone-800 rounded text-[10px] border border-stone-700">FAST</span>
              <span className="px-2 py-1 bg-stone-800 rounded text-[10px] border border-stone-700">SECURE</span>
              <span className="px-2 py-1 bg-stone-800 rounded text-[10px] border border-stone-700">MOBILE-FRIENDLY</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-stone-500 font-bold uppercase text-sm tracking-widest">Our Services</h4>
            <ul className="space-y-2 text-stone-300">
              <li>• Wedding Invitation Website</li>
              <li>• Pre-Wedding & Engagement</li>
              <li>• Event Ceremony Portals</li>
              <li>• Digital RSVP Management</li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-[#120a07] p-6 rounded-xl border border-stone-800">
             <h4 className="text-center text-sm font-bold mb-4">WANT A WEBSITE LIKE THIS?</h4>
             <button className="w-full bg-[#d4a373] hover:bg-[#c39262] text-stone-900 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all mb-4">
               <MessageCircle size={18} /> Create Your Own
             </button>
             <div className="bg-white p-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded flex-shrink-0">
                  {/* Placeholder for QR */}
                  <div className="w-full h-full flex items-center justify-center text-[8px] text-stone-500">QR CODE</div>
                </div>
                <div>
                  <p className="text-stone-900 font-bold text-xs">SCAN TO CHAT</p>
                  <p className="text-stone-500 text-[10px]">Open camera & scan to start WhatsApp chat.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}