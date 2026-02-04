import { motion } from 'framer-motion';

export default function Cover({ onOpen, names }) {
  return (
    <motion.div 
      exit={{ y: '-100%', transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#001a3d] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-700 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative text-center z-10 px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-200 uppercase tracking-[0.3em] text-sm mb-4"
        >
          You are invited to the wedding of
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-serif text-white mb-8"
        >
          {names.groom} <span className="text-amber-400">&</span> {names.bride}
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onOpen}
          className="relative group p-[2px] rounded-full bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-200 shadow-[0_0_30px_rgba(251,191,36,0.3)]"
        >
          <div className="bg-[#001a3d] px-10 py-4 rounded-full transition-all group-hover:bg-transparent">
            <span className="text-white font-bold tracking-widest uppercase text-sm group-hover:text-[#001a3d]">
              Open Invitation
            </span>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
}