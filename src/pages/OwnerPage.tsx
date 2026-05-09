import { motion } from 'motion/react';
import { channelData } from '../data/channel';

export default function OwnerPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-outfit uppercase tracking-[0.3em] text-gold-500 text-sm mb-4 block">Meet The Creator</span>
          <h1 className="font-display text-5xl md:text-6xl text-stone-100 mb-6">The Mind Behind The Lens</h1>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[16/9] w-full rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Creator" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert prose-stone prose-lg max-w-none font-sans text-stone-300 space-y-6"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-stone-200 font-display">
              "We're taking the lessons, values, and simple wisdom of village life and applying them to the challenges and opportunities of the modern world."
            </p>
            
            <p>
              Hey there! Welcome to my digital home. Through <strong>{channelData.name}</strong>, I set out on a mission to document my journey from a quiet, traditional village setting to the bustling, complex modern world. 
            </p>
            
            <p>
              It started as a simple idea: bringing authentic values into global exploration. Whether it's career changes, travel vlogs, lifestyle adjustments, or deep self-improvement sessions, every video aims to capture the essence of bridging two completely different worlds.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
              <div className="p-8 border border-stone-800 bg-stone-900/50 rounded-sm">
                <h3 className="font-display text-2xl text-gold-400 mb-4">The Vision</h3>
                <p className="font-sans text-stone-400 text-sm leading-relaxed">
                  To inspire others to embrace their roots while chasing global ambitions. Showing that you can take the person out of the village, but you can't take the spirit out of the person.
                </p>
              </div>
              <div className="p-8 border border-stone-800 bg-stone-900/50 rounded-sm">
                <h3 className="font-display text-2xl text-gold-400 mb-4">The Community</h3>
                <p className="font-sans text-stone-400 text-sm leading-relaxed">
                  With over {channelData.stats.subscribers} amazing members, we've built a space that values authenticity, growth, and sharing the genuine moments of our lives.
                </p>
              </div>
            </div>

            <p>
              This isn't just a channel; it's a documentary of growth. Thank you for being part of this ultimate journey. I read your comments, I see your support, and I appreciate every single one of you navigating the world alongside me.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
