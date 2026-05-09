import { useState } from 'react';
import { motion } from 'motion/react';
import { channelData } from '../data/channel';
import { PlayCircle } from 'lucide-react';

export default function FeaturedContent() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section id="episodes" className="py-32 px-6 bg-stone-900 border-t border-stone-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-outfit uppercase tracking-[0.2em] text-gold-500 text-sm mb-4 block">Original Series</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-100">Featured Stories</h2>
          </div>
          <a href={`https://youtube.com/${channelData.handle}`} target="_blank" rel="noreferrer" className="font-outfit text-sm uppercase tracking-widest text-stone-400 hover:text-stone-100 transition-colors border-b border-stone-800 pb-1 hover:border-gold-500">
            View All Episodes
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channelData.videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group"
            >
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-stone-800 cursor-pointer"
                onClick={() => setPlayingVideoId(video.id)}
              >
                {playingVideoId === video.id ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.youtubeVideoId}?autoplay=1`} 
                    title={video.title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover"
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                      <PlayCircle className="w-16 h-16 text-white/90 drop-shadow-lg" strokeWidth={1} />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-stone-950/80 backdrop-blur-md px-3 py-1 text-xs font-outfit tracking-widest text-stone-300 rounded-[2px]">
                      {video.duration}
                    </div>
                  </>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-outfit uppercase tracking-widest text-stone-500">
                  <span>{video.date}</span>
                  <span>{video.views}</span>
                </div>
                <h3 className="font-display text-lg text-stone-200 group-hover:text-gold-400 transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
