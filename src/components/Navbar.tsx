import { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { Link } from 'react-router-dom';
import { channelData } from '../data/channel';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-display text-xl text-stone-100 tracking-wide flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-500/30">
            <span className="font-outfit text-gold-400 text-sm font-light">V</span>
          </span>
          V2W
        </Link>

        <div className="hidden md:flex gap-8 items-center font-outfit text-xs uppercase tracking-widest text-stone-300">
          <Link to="/owner" className="hover:text-gold-400 transition-colors">Our Story / Owner</Link>
          <a href="#episodes" className="hover:text-gold-400 transition-colors">Episodes</a>
          <a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a>
        </div>

        <a 
          href={`https://youtube.com/${channelData.handle}`}
          target="_blank"
          rel="noreferrer"
          className="border border-stone-700 px-5 py-2 font-outfit text-xs uppercase tracking-widest text-stone-300 hover:bg-stone-100 hover:text-stone-900 transition-all"
        >
          Subscribe
        </a>
      </div>
    </motion.nav>
  );
}
