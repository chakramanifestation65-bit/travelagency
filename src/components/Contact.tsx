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

  const contactItems = [
    { icon: MapPin, label: 'Office address', value: ADDRESS },
    { icon: Phone, label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Clock, label: 'Office hours', value: OFFICE_HOURS },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="bg-warm-ivory rounded-xl p-5 h-full">
                    <div className="w-10 h-10 rounded-lg bg-indigo-night flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-marigold" />
                    </div>
                    <p className="text-xs text-charcoal/40 font-semibold mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-indigo-night">{item.value}</p>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <a
              href={waLink("Hi, I'm interested in a trip")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-6 py-4 rounded-lg transition-colors"
            >
              <WhatsApp className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="bg-warm-ivory rounded-2xl p-6 sm:p-8">
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
                  className="w-full bg-white border border-charcoal/15 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent"
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
                  className="w-full bg-white border border-charcoal/15 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent"
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
                  className="w-full bg-white border border-charcoal/15 rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent resize-none"
                />
              </div>

              <button
                onClick={handleSend}
                className="w-full flex items-center justify-center gap-2 bg-indigo-night hover:bg-indigo-night/90 text-warm-ivory font-semibold px-6 py-3.5 rounded-lg transition-colors"
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
