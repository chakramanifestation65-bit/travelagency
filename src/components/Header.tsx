import { useState, useEffect } from 'react';
import { Menu, X, Phone, WhatsApp } from './Icons';
import { waLink, PHONE_DISPLAY, PHONE_TEL } from '../data';
import { useScrolledPast } from '../hooks/useScrollMotion';

const navLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Hajj & Umrah', href: '#hajj-umrah' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolledPast(600);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-night shadow-lg header-shrink">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ${scrolled ? 'py-1.5' : 'py-3'}`}>
        <a href="#home" className="flex items-center gap-2 group">
          <div className={`rounded-lg bg-marigold flex items-center justify-center header-shrink ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
            <span className="text-indigo-night font-display font-bold header-shrink" style={{ fontSize: scrolled ? '0.9rem' : '1.125rem' }}>F</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-warm-ivory header-shrink ${scrolled ? 'text-base' : 'text-lg'}`}>FlyWheel</span>
            <span className="text-xs font-medium text-marigold">PK Tours</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-warm-ivory text-sm font-medium hover:text-marigold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-warm-ivory hover:text-marigold transition-colors"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink("Hi, I'm interested in a trip")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-marigold hover:bg-marigold/90 text-indigo-night text-sm font-bold px-4 py-2.5 rounded-lg transition-colors"
          >
            <WhatsApp className="w-4 h-4" />
            Book on WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-warm-ivory hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-indigo-night border-t border-white/10 animate-slide-down">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-warm-ivory hover:text-marigold hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-white/10">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-warm-ivory"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={waLink("Hi, I'm interested in a trip")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-marigold text-indigo-night text-sm font-bold px-4 py-3 rounded-lg"
              >
                <WhatsApp className="w-4 h-4" />
                Book on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
