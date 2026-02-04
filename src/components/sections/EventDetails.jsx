import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

export default function EventDetails({ events, title }) {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        {/* Updated heading to match "Our Moments" style */}
        <h2 className="text-4xl font-serif text-center mb-16 text-gold">
          {title || "Wedding Events"}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              /* Changed border to amber-400 (Gold) and added border-2 for visibility */
              className="p-8 border-2 border-amber-400 rounded-2xl bg-stone-50 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-serif text-rose-700 mb-4">{event.title}</h3>
              
              <div className="space-y-3 text-stone-600">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-amber-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-amber-500" />
                  <span>{event.location}</span>
                </div>
              </div>

              <a 
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full text-center py-3 bg-stone-800 text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-rose-600 transition-colors"
              >
                View on Map
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}