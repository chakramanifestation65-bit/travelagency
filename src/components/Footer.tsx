import { waLink, PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS, OFFICE_HOURS } from '../data';
import { Facebook, Instagram, TikTok, WhatsApp, Phone, Mail, MapPin, Clock, Shield } from './Icons';

const quickLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Hajj & Umrah', href: '#hajj-umrah' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const trustBadges = [
  'PTDC Reg. No. PK-ICT-2013-0487',
  'IATA / PATA Member No. 7291',
  'Hajj & Umrah License No. HGO-3847',
];

export default function Footer() {
  return (
    <footer className="bg-indigo-night text-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-marigold flex items-center justify-center">
                <span className="text-indigo-night font-display font-bold text-lg">F</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg text-warm-ivory">FlyWheel</span>
                <span className="text-xs font-medium text-marigold">PK Tours</span>
              </div>
            </div>
            <p className="text-sm text-warm-ivory/70 leading-relaxed max-w-xs">
              Islamabad-based tour operator specializing in domestic and international vacation packages,
              including Hajj and Umrah. Licensed, trusted, and ready to plan your next journey.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="TikTok">
                <TikTok className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-marigold mb-4">Quick links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-warm-ivory/70 hover:text-marigold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-marigold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-warm-ivory/70">
                <MapPin className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                {ADDRESS}
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2.5 text-sm text-warm-ivory/70 hover:text-marigold transition-colors">
                  <Phone className="w-4 h-4 text-marigold shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={waLink("Hi, I'm interested in a trip")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-warm-ivory/70 hover:text-marigold transition-colors">
                  <WhatsApp className="w-4 h-4 text-green-400 shrink-0" />
                  WhatsApp chat
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-sm text-warm-ivory/70 hover:text-marigold transition-colors">
                  <Mail className="w-4 h-4 text-marigold shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-warm-ivory/70">
                <Clock className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                {OFFICE_HOURS}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-marigold mb-4">Trust & licensing</h4>
            <ul className="space-y-3">
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-start gap-2.5 text-sm text-warm-ivory/70">
                  <Shield className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                  {badge}
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-warm-ivory/60 leading-relaxed">
                Bank transfer, Easypaisa & JazzCash accepted — confirm with our team.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-warm-ivory/50">
            &copy; {new Date().getFullYear()} FlyWheel PK Tours. All rights reserved.
          </p>
          <p className="text-xs text-warm-ivory/40">
            Crafted with care in Islamabad, Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
