import { MapPin, Navigation } from 'lucide-react';

export default function Venue({ data }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12 text-stone-800">
          {data.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {data.locations.map((loc, index) => (
            <div key={index} className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm border border-stone-100">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-rose-500" />
                  <h3 className="text-2xl font-serif">{loc.name}</h3>
                </div>
                <p className="text-stone-600 mb-6">{loc.address}</p>
                <a 
                  href={loc.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-stone-800 text-white px-6 py-3 rounded-full hover:bg-stone-700 transition-colors"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>
              </div>
              {/* Optional: Embed a static map image or iframe here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}