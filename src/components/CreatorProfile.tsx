import { motion, useScroll, useTransform } from 'motion/react';
import { channelData } from '../data/channel';

export default function CreatorProfile() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-32 px-6 relative bg-stone-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-100 leading-tight">
              A Journey of <br/>
              <span className="text-gold-500 italic">Growth</span> & Discovery
            </h2>
            
            <div className="prose prose-invert prose-stone max-w-none">
              <p className="font-sans text-stone-300 text-lg leading-relaxed mb-6">
                {channelData.description.split('.')[0]}. {channelData.description.split('.')[1]}.
              </p>
              <p className="font-sans text-stone-400 text-base leading-relaxed">
                {channelData.description.split('.').slice(2).join('.')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-800/50">
              {Object.entries(channelData.stats).map(([label, value], idx) => (
                <div key={idx}>
                  <div className="font-display text-3xl text-gold-400 mb-1">{value}</div>
                  <div className="font-outfit text-xs uppercase tracking-widest text-stone-500">
                    {label.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[600px] w-full rounded-sm overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 h-[120%]">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Creator Profile" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
