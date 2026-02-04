import { motion } from 'framer-motion';

export default function Intro({ data }) {
  // We define a shared slow transition setting
  const slowTransition = { 
    duration: 2.5, // 2.5 seconds for a cinematic feel
    ease: "easeOut" 
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16 text-gold">{data.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Groom - Slowed Down */}
          <motion.div 
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={slowTransition} // Apply slow transition
            viewport={{ once: true }}
            className="text-center md:text-right space-y-4"
          >
            <div className="relative inline-block">
              <img src={data.groom.image} alt="Groom" className="w-64 h-80 object-cover rounded-t-full border-4 border-gold/20 shadow-2xl" />
              {/* Text label removed from here */}
            </div>
            <h3 className="text-3xl font-serif pt-6 text-white">{data.groom.name}</h3>
            <p className="text-white/60 italic max-w-sm ml-auto">{data.groom.bio}</p>
          </motion.div>

          {/* Bride - Synchronized Speed */}
          <motion.div 
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={slowTransition} // Apply the same slow transition
            viewport={{ once: true }}
            className="text-center md:text-left space-y-4"
          >
            <div className="relative inline-block">
              <img src={data.bride.image} alt="Bride" className="w-64 h-80 object-cover rounded-t-full border-4 border-gold/20 shadow-2xl" />
              {/* Text label removed from here */}
            </div>
            <h3 className="text-3xl font-serif pt-6 text-white">{data.bride.name}</h3>
            <p className="text-white/60 italic max-w-sm mr-auto">{data.bride.bio}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}