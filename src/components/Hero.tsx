import { motion } from 'motion/react';
import { channelData } from '../data/channel';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/70 to-stone-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="font-outfit uppercase tracking-[0.3em] text-gold-400 text-sm font-medium mb-6 block">
            {channelData.handle}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 drop-shadow-2xl">
            From the <span className="italic font-normal text-stone-300">Village</span><br/> 
            To the <span className="text-gold-500">World</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            {channelData.shortDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://youtube.com/@villagetoworld1475"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-stone-100 text-stone-950 font-outfit font-semibold uppercase tracking-widest text-sm overflow-hidden rounded-sm transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gold-400 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100 ease-out duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Subscribe Now
              </span>
            </a>
            
            <button className="group flex items-center gap-4 px-6 py-4 font-outfit text-sm uppercase tracking-widest text-stone-100 transition-colors hover:text-gold-400">
              <div className="w-12 h-12 rounded-full border border-stone-100/30 flex items-center justify-center group-hover:border-gold-400/50 group-hover:bg-gold-400/10 transition-all">
                <Play className="w-4 h-4 ml-1" />
              </div>
              Watch Latest
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500"
      >
        <span className="font-outfit text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
