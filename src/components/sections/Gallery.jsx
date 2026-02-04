import { motion } from 'framer-motion';

export default function Gallery({ data }) {
  if (!data || !data.images) return null;

  return (
    <section id="gallery" className="py-20 px-4 bg-[#000b1e]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-gold">
          {data.title || "Our Moments"}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-2">
          {data.images.map((src, index) => (
            <motion.div
              key={index}
              /* Fixed Aspect Ratio and Container */
              className="relative aspect-[4/5] overflow-hidden rounded-2xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={src} 
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                alt={`Moment ${index + 1}`}
                loading="lazy"
              />
              
              {/* FIXED GOLDEN BORDER: Absolute overlay ensures it stays exactly on the box edge */}
              <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl group-hover:border-gold transition-colors duration-500 pointer-events-none z-10" />
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}