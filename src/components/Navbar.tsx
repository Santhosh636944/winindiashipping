import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, Phone } from 'lucide-react';
import WinindiaLogo from './WinindiaLogo';

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'why-us', 'network', 'tracking', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Choose Us', href: '#why-us', id: 'why-us' },
    { label: 'Global Network', href: '#network', id: 'network' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#contact') {
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-navy/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none"
            id="nav-logo"
          >
            <WinindiaLogo layout="horizontal" className="h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-sans font-medium text-[13px] uppercase tracking-wider transition-all duration-300 relative py-2 hover:text-gold ${
                    activeSection === link.id ? 'text-gold' : 'text-white/80'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold shadow-[0_1px_8px_#C8A96B] rounded-full"></span>
                  )}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={onQuoteClick}
                className="font-sans font-semibold text-xs uppercase tracking-wider text-navy bg-gold hover:bg-white border border-gold hover:border-white px-5 py-2.5 rounded shadow-[0_4px_15px_rgba(200,169,107,0.3)] hover:shadow-[0_4px_15px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-95"
                id="nav-btn-quote"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:+918940028773"
              className="p-2 rounded-full bg-white/5 border border-white/15 text-gold hover:bg-gold hover:text-navy transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-white hover:text-gold hover:bg-white/5 focus:outline-none transition-all duration-300 border border-white/10"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/10 ${
          isMobileMenuOpen ? 'max-h-screen bg-navy' : 'max-h-0'
        }`}
        id="mobile-menu-drawer"
      >
        <div className="px-4 pt-3 pb-6 space-y-2 bg-navy/98 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-3 rounded font-sans font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-gold/10 text-gold border-l-4 border-gold pl-3'
                  : 'text-white/80 hover:bg-white/5 hover:text-white pl-4'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 px-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full text-center font-sans font-bold text-xs uppercase tracking-wider text-navy bg-gold py-3 rounded shadow-md"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
