import { useState } from 'react';
import { packages, waLink, type TripPackage } from '../data';
import { Hotel, Car, Utensils, ChevronDown, WhatsApp, Clock, Check } from './Icons';

type PackagesProps = {
  filterDestination: string;
  filterTripType: string;
};

const categories = ['All', 'Domestic', 'International', 'Honeymoon', 'Family', 'Group', 'Corporate'] as const;

function formatPKR(n: number): string {
  return 'PKR ' + n.toLocaleString('en-PK');
}

function PackageCard({ pkg }: { pkg: TripPackage }) {
  const [expanded, setExpanded] = useState(false);

  const waText = `Hi, I'm interested in the "${pkg.title}" package (${pkg.duration}, ${formatPKR(pkg.price)} from). Please share more details.`;

  return (
    <div className={`bg-white rounded-2xl overflow-hidden flex flex-col ${pkg.featured ? 'shadow-lg' : 'shadow-sm'} hover:shadow-lg transition-shadow duration-300`}>
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-night/60 to-transparent" />
        {pkg.featured && (
          <div className="absolute top-0 right-0 bg-truck-crimson text-warm-ivory text-xs font-bold px-3 py-1.5 rounded-bl-lg">
            Featured
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="bg-warm-ivory/95 text-indigo-night text-xs font-semibold px-2.5 py-1 rounded-md">
            {pkg.category}
          </span>
          <span className="flex items-center gap-1 bg-indigo-night/80 text-warm-ivory text-xs font-medium px-2.5 py-1 rounded-md">
            <Clock className="w-3 h-3" />
            {pkg.duration}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-indigo-night mb-1">{pkg.title}</h3>
        <p className="text-sm text-charcoal/50 mb-3">{pkg.destination}</p>

        <div className="flex items-center gap-4 mb-4">
          <span title="Hotel included" className="flex items-center gap-1.5 text-sm text-charcoal/60">
            <Hotel className="w-4 h-4 text-indigo-night" /> Hotel
          </span>
          <span title="Transport included" className="flex items-center gap-1.5 text-sm text-charcoal/60">
            <Car className="w-4 h-4 text-indigo-night" /> Transport
          </span>
          <span title="Meals included" className="flex items-center gap-1.5 text-sm text-charcoal/60">
            <Utensils className="w-4 h-4 text-indigo-night" /> Meals
          </span>
        </div>

        <div className="mb-4">
          <span className="text-xs text-charcoal/40">from</span>
          <p className="font-display font-bold text-2xl text-marigold">{formatPKR(pkg.price)}</p>
          <span className="text-xs text-charcoal/40">per person</span>
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-warm-ivory hover:bg-warm-ivory/80 text-indigo-night font-semibold text-sm px-4 py-3 rounded-lg transition-colors"
          >
            {expanded ? 'Hide details' : 'View details'}
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
          <a
            href={waLink(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-indigo-night hover:bg-indigo-night/90 text-warm-ivory font-semibold text-sm px-4 py-3 rounded-lg transition-colors"
          >
            <WhatsApp className="w-4 h-4" />
            Book
          </a>
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-charcoal/10">
            <h4 className="font-semibold text-sm text-indigo-night mb-2">Itinerary</h4>
            <ol className="space-y-1.5 mb-4">
              {pkg.itinerary.map((day, i) => (
                <li key={i} className="text-sm text-charcoal/70 flex gap-2">
                  <span className="text-marigold font-bold text-xs mt-0.5 shrink-0">{i + 1}</span>
                  {day}
                </li>
              ))}
            </ol>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm text-indigo-night mb-2">Inclusions</h4>
                <ul className="space-y-1">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="text-sm text-charcoal/70 flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-truck-crimson mb-2">Exclusions</h4>
                <ul className="space-y-1">
                  {pkg.exclusions.map((item, i) => (
                    <li key={i} className="text-sm text-charcoal/50 flex items-start gap-1.5">
                      <span className="text-truck-crimson shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-warm-ivory rounded-lg p-3 flex items-center justify-between">
              <span className="text-sm text-charcoal/70">Per person</span>
              <span className="font-display font-bold text-lg text-indigo-night">{formatPKR(pkg.perPerson)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Packages({ filterDestination, filterTripType }: PackagesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = packages.filter((pkg) => {
    const matchCategory = activeCategory === 'All' || pkg.category === activeCategory;
    const matchDest = !filterDestination || pkg.destination === filterDestination;
    const matchType = !filterTripType || pkg.category === filterTripType;
    return matchCategory && matchDest && matchType;
  });

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-indigo-night mb-3">
            Curated trips for every kind of traveler
          </h2>
          <p className="text-charcoal/70 max-w-2xl">
            Browse our most popular packages, filter by category, and expand any card for the full itinerary.
            Ready to book? Send us a WhatsApp message in one tap.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-night text-warm-ivory'
                  : 'bg-warm-ivory text-charcoal/70 hover:bg-warm-ivory/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-charcoal/50 text-lg">No packages match your filter. Try a different category or destination.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-marigold font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
