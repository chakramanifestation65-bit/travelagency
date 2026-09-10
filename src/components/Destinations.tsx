import { destinations } from '../data';
import { Mountain, Globe } from './Icons';
import { useInView } from '../hooks/useScrollMotion';

type DestinationsProps = {
  onCardClick: (destination: string) => void;
};

function formatPKR(n: number): string {
  return 'PKR ' + n.toLocaleString('en-PK');
}

export default function Destinations({ onCardClick }: DestinationsProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-indigo-night mb-3">
            Where will your next adventure take you?
          </h2>
          <p className="text-charcoal/70 max-w-2xl">
            From the valleys of northern Pakistan to the skylines of the Gulf —
            explore our most popular destinations and find your perfect getaway.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {destinations.map((dest, i) => {
            const Icon = dest.type === 'Domestic' ? Mountain : Globe;
            return (
              <button
                key={dest.name}
                onClick={() => onCardClick(dest.name)}
                className={`group relative overflow-hidden rounded-xl text-left card-lift hover:shadow-lg dest-card ${inView ? 'dest-visible' : ''}`}
                style={{ animationDelay: inView ? `${i * 60}ms` : undefined }}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-night via-indigo-night/30 to-transparent rounded-xl" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="flex items-center gap-1 bg-warm-ivory/95 rounded-md px-2 py-0.5 text-xs font-semibold text-indigo-night">
                    <Icon className="w-3 h-3" />
                    {dest.type}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <h3 className="text-warm-ivory font-display font-bold text-base leading-tight mb-1">
                    {dest.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-marigold text-xs">from</span>
                    <p className="text-warm-ivory font-semibold text-sm">{formatPKR(dest.price)}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
