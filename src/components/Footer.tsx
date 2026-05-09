import { motion, useScroll, useTransform } from 'motion/react';
import { Youtube, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 pt-32 pb-12 px-6 border-t border-stone-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gold-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-8">Join The Journey</h2>
          <p className="font-sans text-stone-400 max-w-xl mx-auto mb-12">
            Subscribe to the channel for weekly vlogs showcasing our global adventures starting from village roots.
          </p>
          
          <a
             href="https://youtube.com/@villagetoworld1475" 
             target="_blank" 
             rel="noreferrer"
             className="px-12 py-5 bg-stone-100 text-stone-950 font-outfit uppercase tracking-widest text-sm font-semibold hover:bg-gold-400 transition-colors duration-300 inline-block"
          >
            Subscribe Official Channel
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-stone-800/50">
          <div>
            <h3 className="font-outfit text-xl text-stone-200 mb-4 tracking-wider">Village 2 World</h3>
            <p className="text-stone-500 text-sm font-sans max-w-xs">
              A documentary series exploring the bridge between traditional village wisdom and modern global living.
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://youtube.com/@villagetoworld1475" className="text-stone-500 hover:text-gold-400 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="text-right">
            <p className="text-stone-500 text-sm font-sans">
              © {new Date().getFullYear()} Village To World.<br/>
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
