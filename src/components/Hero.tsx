import { useState } from 'react';
import { Search } from './Icons';

type HeroProps = {
  onSearch: (destination: string, tripType: string) => void;
};

const tripTypes = ['Domestic', 'International', 'Hajj & Umrah', 'Honeymoon', 'Group'];
const destinationOptions = [
  'Hunza Valley', 'Skardu', 'Naran-Kaghan', 'Swat Valley', 'Fairy Meadows',
  'Neelum Valley', 'Murree', 'Gilgit-Baltistan', 'Kumrat Valley',
  'Dubai / UAE', 'Turkey', 'Thailand', 'Malaysia', 'Azerbaijan', 'Maldives',
];

const stats = [
  { value: '12+', label: 'Years in business' },
  { value: '8,500+', label: 'Trips arranged' },
  { value: '25,000+', label: 'Travelers served' },
];

export default function Hero({ onSearch }: HeroProps) {
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState('');

  const handleSearch = () => {
    onSearch(destination, tripType);
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/12993961/pexels-photo-12993961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Pakistan northern areas highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-night/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-warm-ivory leading-[1.1] mb-5 text-balance animate-fade-up">
            Discover Pakistan and the world,{' '}
            <span className="underline-marigold">one journey at a time</span>
          </h1>

          <p className="text-lg text-warm-ivory/90 mb-8 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            FlyWheel PK has been arranging domestic and international vacations, Hajj, and Umrah
            from Islamabad since 2013 — with transparent pricing and 24/7 support.
          </p>

          <div className="bg-warm-ivory rounded-xl shadow-2xl p-4 sm:p-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-charcoal mb-1.5">
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white border border-charcoal/15 rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent cursor-pointer"
                >
                  <option value="">All destinations</option>
                  {destinationOptions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-semibold text-charcoal mb-1.5">
                  Trip type
                </label>
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-full bg-white border border-charcoal/15 rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-marigold focus:border-transparent cursor-pointer"
                >
                  <option value="">All types</option>
                  {tripTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="flex items-center justify-center gap-2 bg-indigo-night hover:bg-indigo-night/90 text-warm-ivory font-bold px-6 py-2.5 rounded-lg transition-colors sm:self-end"
              >
                <Search className="w-5 h-5" />
                Find trips
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-5">
                {i > 0 && <div className="w-px h-10 bg-warm-ivory/30" />}
                <div>
                  <div className="font-display font-bold text-2xl text-marigold leading-none">{stat.value}</div>
                  <div className="text-warm-ivory/70 text-xs mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-warm-ivory to-transparent z-10" />
    </section>
  );
}
