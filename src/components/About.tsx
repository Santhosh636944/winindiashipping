import { motion } from 'motion/react';
import { Anchor, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-[#050f24] relative overflow-hidden">
      {/* Decorative subtle radar circle in background */}
      <div className="absolute -left-32 bottom-0 w-96 h-96 rounded-full border border-white/5 pointer-events-none z-0" />
      <div className="absolute -left-32 bottom-0 w-64 h-64 rounded-full border border-white/5 pointer-events-none z-0 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Presentation (Left / Right switch layout) - Col 5 */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Premium Background Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-ocean/20 to-gold/10 rounded-2xl blur-xl" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="WININDIA Corporate Headquarters"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  id="about-visual-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              </div>

              {/* Floating Stat Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-4 sm:right-6 bg-navy/95 border border-gold/40 p-5 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] backdrop-blur-md max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-gold/10 border border-gold/30">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">AEO Certified</h4>
                    <p className="font-sans text-[11px] text-white/60 mt-0.5">Approved customs broker and global cargo handler.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* About Narrative Text - Col 7 */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-bold">ESTABLISHED PRESTIGE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-6"
            >
              About WININDIA
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg text-white/80 leading-relaxed mb-6"
            >
              WININDIA Shipping and Logistics delivers reliable freight forwarding, cargo handling, customs clearance, and supply chain solutions across domestic and international markets.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-sm text-white/60 leading-relaxed mb-8"
            >
              Guided by a commitment to operational perfection, we bridge critical supply gaps with customized strategies. Our deep roots in major Indian hubs—headquartered in Chennai—enable seamless customs routing, secure warehousing, and direct connections to European, Middle Eastern, and Pan-Asian maritime corridors.
            </motion.p>

            {/* Core Capabilities Checks */}
            <div className="grid sm:grid-cols-2 gap-4 w-full mb-10">
              {[
                { title: 'Global Freight Forwarding', desc: 'Ocean, Air, and inland inter-modal transports.' },
                { title: 'Compliant Customs Brokerage', desc: 'Secure filing with Tiruvottiyur & Chennai port houses.' },
                { title: 'Secured Logistics Handling', desc: 'Modern equipment, climate monitoring, and packing.' },
                { title: 'Integrated Supply Solutions', desc: 'End-to-end warehousing, transport, and drops.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-3 p-4 rounded-xl bg-navy/40 border border-white/5 hover:border-white/10 hover:bg-navy/60 transition-all duration-300"
                >
                  <div className="p-1.5 h-fit rounded bg-gold/10 border border-gold/20 text-gold mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider">{item.title}</h4>
                    <p className="font-sans text-xs text-white/50 mt-1 leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote redirection */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10 w-full"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <p className="font-sans text-xs text-white/70">
                Are you looking for direct vessel allocations? <a href="#contact" className="text-gold font-bold underline hover:text-white transition-colors">Consult our logistics agents <ArrowUpRight className="inline w-3 h-3" /></a>
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
