import { motion } from 'motion/react';
import { channelData } from '../data/channel';
import { Users, Eye, Video, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const metrics = [
    { label: "Community", value: channelData.stats.subscribers, icon: Users, suffix: " Subscribers" },
    { label: "Reach", value: channelData.stats.views, icon: Eye, suffix: " Total Views" },
    { label: "Library", value: channelData.stats.videos, icon: Video, suffix: " Stories" },
    { label: "Engagement", value: channelData.stats.engagementRate, icon: TrendingUp, suffix: " Active" }
  ];

  return (
    <section className="py-24 bg-stone-900 border-t border-stone-800/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="font-outfit text-sm uppercase tracking-[0.3em] text-stone-500 text-center mb-16">
          Global Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-stone-950/50 backdrop-blur border border-stone-800/50 rounded-sm p-6 text-center hover:border-gold-500/30 transition-colors"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-stone-900 flex items-center justify-center mb-4 text-gold-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-display text-4xl text-stone-100 mb-2">{metric.value}</div>
                <div className="font-outfit text-[10px] uppercase tracking-widest text-stone-400">
                  {metric.suffix}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
