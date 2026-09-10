import { useState } from 'react';
import { waLink, PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS, OFFICE_HOURS } from '../data';
import { Phone, Mail, MapPin, Clock, WhatsApp } from './Icons';

export default function Contact() {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const text = `Hi, my name is ${name || '[your name]'}. I'm interested in ${destination || 'a trip'}. ${message || 'Please get in touch.'}`;
    window.open(waLink(text), '_blank');
  };

  const contactLines = [
    { icon: MapPin, value: ADDRESS },
    { icon: Phone, value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { icon: WhatsApp, value: 'WhatsApp chat', href: waLink("Hi, I'm interested in a trip") },
    { icon: Mail, value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Clock, value: OFFICE_HOURS },
  ];

  return (
    <section id="contact" className="py-20 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-indigo-night mb-3">
            Let's plan your next journey
          </h2>
          <p className="text-charcoal/70 max-w-2xl">
            Have a question or ready to book? Reach out and our team will get back to you within hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <ul className="space-y-3 mb-6">
              {contactLines.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <li className="flex items-center gap-2.5 text-sm text-charcoal/80">
                    <Icon className="w-4 h-4 text-charcoal/40 shrink-0" />
                    {item.value}
                  </li>
                );
                return item.href ? (
                  <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block hover:text-marigold transition-colors">
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </ul>

            <a
              href={waLink("Hi, I'm interested in a trip")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
            >
              <WhatsApp className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8">
            <h3 className="font-display font-bold text-xl text-indigo-night mb-2">Send us a message</h3>
            <p className="text-sm text-charcoal/60 mb-5">
              Fill in the details below and we'll open WhatsApp with your message pre-filled — no waiting, no forms to submit.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ahmed Khan"
                  className="w-full bg-warm-ivory border border-charcoal/15 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-1.5">
                  Destination of interest
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Hunza Valley or Dubai"
                  className="w-full bg-warm-ivory border border-charcoal/15 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-1.5">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Tell us about your travel plans, dates, number of people..."
                  className="w-full bg-warm-ivory border border-charcoal/15 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent resize-none"
                />
              </div>

              <button
                onClick={handleSend}
                className="w-full flex items-center justify-center gap-2 bg-truck-crimson hover:bg-truck-crimson/90 text-warm-ivory font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                <WhatsApp className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
