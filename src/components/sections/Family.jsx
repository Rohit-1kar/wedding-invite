import { motion } from 'framer-motion';

export default function Family({ data }) {
  return (
    <section id="family" className="py-24 bg-[#000b1e] overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-serif text-center mb-16 text-gold">{data.title}</h2>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-stone-300" />

          {/* Groom's Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif text-amber-700 mb-6 uppercase tracking-widest">
              {data.groomSide.title}
            </h3>
            <ul className="space-y-3">
              {data.groomSide.members.map((member, i) => (
                // Changed text-stone-700 to text-white
                <li key={i} className="text-white font-medium text-lg">{member}</li>
              ))}
            </ul>
          </motion.div>

          {/* Bride's Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif text-rose-600 mb-6 uppercase tracking-widest">
              {data.brideSide.title}
            </h3>
            <ul className="space-y-3">
              {data.brideSide.members.map((member, i) => (
                // Changed text-stone-700 to text-white
                <li key={i} className="text-white font-medium text-lg">{member}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}