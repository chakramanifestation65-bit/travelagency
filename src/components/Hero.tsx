import { useState } from 'react';
import { Search } from './Icons';
import { useScrollY, useCountUp, useInView } from '../hooks/useScrollMotion';

type HeroProps = {
  onSearch: (destination: string, tripType: string) => void;
};

const tripTypes = ['Domestic', 'International', 'Hajj & Umrah', 'Honeymoon', 'Group'];
const destinationOptions = [
  'Hunza Valley', 'Skardu', 'Naran-Kaghan', 'Swat Valley', 'Fairy Meadows',
  'Neelum Valley', 'Murree', 'Gilgit-Baltistan', 'Kumrat Valley',
  'Dubai / UAE', 'Turkey', 'Thailand', 'Malaysia', 'Azerbaijan', 'Maldives',
];

type Stat = { target: number; suffix: string; label: string };

const stats: Stat[] = [
  { target: 12, suffix: '+', label: 'Years in business' },
  { target: 8500, suffix: '+', label: 'Trips arranged' },
  { target: 25000, suffix: '+', label: 'Travelers served' },
];

function StatItem({ stat, active, showRule }: { stat: Stat; active: boolean; showRule: boolean }) {
  const value = useCountUp(stat.target, active);
  const display = value.toLocaleString('en-PK') + stat.suffix;
  return (
    <div className="flex items-center gap-5">
      {showRule && <div className="w-px h-10 bg-warm-ivory/30" />}
      <div>
        <div className="font-display font-bold text-2xl text-marigold leading-none">{display}</div>
        <div className="text-warm-ivory/70 text-xs mt-1">{stat.label}</div>
      </div>
    </div>
  );
}

export default function Hero({ onSearch }: HeroProps) {
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState('');
  const scrollY = useScrollY();
  const [statRef, statInView] = useInView<HTMLDivElement>();

  const parallaxOffset = scrollY * 0.4;

  const handleSearch = () => {
    onSearch(destination, tripType);
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.pexels.com/photos/27244347/pexels-photo-27244347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Karakoram Highway winding through the mountains of Hunza, Pakistan"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-indigo-night/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-warm-ivory leading-[1.1] mb-5 text-balance hero-enter">
            Discover Pakistan and the world,{' '}
            <span className="underline-marigold">one journey at a time</span>
          </h1>

          <p className="text-lg text-warm-ivory/90 mb-8 max-w-2xl leading-relaxed hero-enter" style={{ animationDelay: '0.1s' }}>
            FlyWheel PK has been arranging domestic and international vacations, Hajj, and Umrah
            from Islamabad since 2013 — with transparent pricing and 24/7 support.
          </p>

          <div className="bg-warm-ivory rounded-xl shadow-2xl p-4 sm:p-5 hero-enter" style={{ animationDelay: '0.2s' }}>
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

          <div ref={statRef} className="flex items-center gap-5 mt-8 hero-enter" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} active={statInView} showRule={i > 0} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-warm-ivory to-transparent z-10" />
    </section>
  );
}
