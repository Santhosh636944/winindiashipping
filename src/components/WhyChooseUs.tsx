import { motion } from 'motion/react';
import { Clock, ShieldCheck, Globe, Headphones, Compass, Shield } from 'lucide-react';
import { ADVANTAGES } from '../data';

export default function WhyChooseUs() {
  // Helper to map icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock':
        return <Clock className="w-5 h-5 text-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-gold" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-gold" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-gold" />;
      default:
        return <Compass className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section id="why-us" className="py-14 sm:py-20 md:py-24 bg-[#050f24] relative overflow-hidden">
      {/* Decorative vector ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Brand Promise (Left Col) - 4 Cols */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1px] bg-gold" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-bold">TRUST & INTEGRITY</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-6"
            >
              The WININDIA <br />Standard
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-sm text-white/60 leading-relaxed mb-8"
            >
              We treat every shipment not merely as cargo, but as a critical node in our client's business lifecycle. By enforcing rigorous marine handling regulations and keeping communications human, we deliver security.
            </motion.p>

            {/* Micro shield certificate representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-xl bg-navy/60 border border-gold/30 flex gap-4 w-full"
            >
              <div className="p-2.5 rounded-lg bg-gold/10 text-gold h-fit border border-gold/20 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-xs text-white uppercase tracking-wider">Class AAA Carrier</span>
                <span className="font-sans text-xs text-white/50 mt-1 leading-normal">
                  Insured transit policies up to $10M per vessel hull, audited and approved by maritime agencies.
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bento Grid Cards (Right Col) - 8 Cols */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {ADVANTAGES.map((adv, index) => (
                <motion.div
                  key={adv.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-navy/90 to-navy border border-white/5 hover:border-gold/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group transition-all duration-300"
                  id={`why-card-${adv.id}`}
                >
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon container */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 group-hover:bg-gold/10 group-hover:border-gold transition-colors duration-300">
                      {getIcon(adv.iconName)}
                    </div>
                    {/* Big statistics metric */}
                    {adv.stat && (
                      <span className="font-display text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                        {adv.stat}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {adv.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-white/60 leading-relaxed mb-4">
                    {adv.description}
                  </p>

                  {/* Stat Sub-label */}
                  {adv.statLabel && (
                    <div className="flex items-center gap-1.5 pt-3 border-t border-white/5 font-mono text-[10px] text-white/40 uppercase tracking-widest mt-auto">
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      <span>{adv.statLabel}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
