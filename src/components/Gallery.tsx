import { motion } from 'motion/react';
import { channelData } from '../data/channel';

export default function Gallery() {
  return (
    <section className="py-24 bg-stone-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="font-display text-4xl text-stone-100 mb-4">Through The Lens</h2>
        <p className="font-sans text-stone-400 max-w-2xl mx-auto">
          The unfiltered beauty of our journey, captured in moments. 
          A visual diary of the village aesthetic meets global exploration.
        </p>
      </div>
      
      <div className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
        {channelData.gallery.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[3/4] snap-center rounded-sm overflow-hidden relative group"
          >
            <img 
              src={img} 
              alt="Gallery Moment" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
