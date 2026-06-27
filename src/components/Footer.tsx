import React from 'react';
import { Anchor, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import WinindiaLogo from './WinindiaLogo';

interface FooterProps {
  onQuoteClick?: () => void;
}

export default function Footer({ onQuoteClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#contact' && onQuoteClick) {
      onQuoteClick();
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer id="contact" className="bg-[#030918] border-t border-white/10 relative overflow-hidden">
      {/* Decorative vector grid overlay in footer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Col - 4 Cols */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-6">
            <a href="#home" onClick={(e) => handleQuickLinkClick(e, '#home')} className="flex items-center gap-2 group focus:outline-none">
              <WinindiaLogo layout="horizontal" className="h-12" />
            </a>
            
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm">
              WININDIA Shipping and Logistics delivers premium global cargo solutions, full vessel operations, and compliant customs brokerage. We connect major trade lanes securely, honoring schedules with elite maritime excellence.
            </p>

            {/* Certifications badges representation */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>AEO Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono uppercase tracking-widest">
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>

          {/* Quick Links Col - 3 Cols */}
          <div className="lg:col-span-3 flex flex-col items-start text-left space-y-5 lg:pl-6">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Quick Sitemaps
            </h4>
            <div className="flex flex-col space-y-3 font-sans text-xs">
              {[
                { label: 'Home Dashboard', href: '#home' },
                { label: 'About corporate', href: '#about' },
                { label: 'Maritime Services', href: '#services' },
                { label: 'Our Standards', href: '#why-us' },
                { label: 'Global Network', href: '#network' },
                { label: 'Get Quote', href: '#contact' }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleQuickLinkClick(e, link.href)}
                  className="text-white/60 hover:text-gold transition-colors block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details Col - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-5">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Contact Information
            </h4>
            <div className="space-y-4 font-sans text-xs">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-white/60 leading-relaxed">
                  38/22, Saravana Nagar 1st Street,<br />
                  Thiruvottiyur, Chennai  - 600019,<br />
                  Tamil Nadu, India
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+918940028773" className="text-white/60 hover:text-gold block font-semibold transition-colors">
                    +91 89400 28773
                  </a>
                  <a href="tel:+916369447959" className="text-white/60 hover:text-gold block font-semibold transition-colors">
                    +91 63694 47959
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href="mailto:info@winindiashipping.com" className="text-white/60 hover:text-gold block font-semibold underline transition-colors">
                  info@winindiashipping.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 font-sans text-[11px] text-white/40">
          <div className="space-y-1">
            <p>© 2026 WININDIA Shipping and Logistics. All Rights Reserved.</p>
            <p className="text-white/30 text-[10px]">Designed & Developed by Santhosh S.</p>
          </div>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#about" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-gold transition-colors">Terms of Carriage</a>
            <span>•</span>
            <a href="#network" className="hover:text-gold transition-colors">Vessel Operations</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
