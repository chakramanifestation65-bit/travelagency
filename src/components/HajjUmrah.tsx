import { hajjTiers, waLink } from '../data';
import { Check, WhatsApp, Clock, MapPin } from './Icons';

function formatPKR(n: number): string {
  return 'PKR ' + n.toLocaleString('en-PK');
}

export default function HajjUmrah() {
  return (
    <section id="hajj-umrah" className="py-20 bg-indigo-night relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/28209449/pexels-photo-28209449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Kaaba"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-warm-ivory mb-3">
            Your sacred journey, handled with care
          </h2>
          <p className="text-warm-ivory/80 mb-5">
            Perform your pilgrimage with peace of mind. Our licensed team handles visas, hotels, transport,
            and religious guidance — so you can focus on your ibadah.
          </p>
          <p className="text-sm text-warm-ivory/60">
            Licensed by the Ministry of Religious Affairs — License No. HGO-3847
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hajjTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-warm-ivory rounded-2xl overflow-hidden flex flex-col ${
                tier.badge ? 'ring-2 ring-truck-crimson' : ''
              }`}
            >
              {tier.badge && (
                <div className="bg-truck-crimson text-warm-ivory text-center text-xs font-bold py-2">
                  {tier.badge}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-indigo-night mb-1">{tier.name}</h3>
                <div className="flex items-center gap-3 text-sm text-charcoal/50 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {tier.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {tier.hotelDistance}
                  </span>
                </div>

                <div className="mb-5">
                  <span className="text-xs text-charcoal/40">starting from</span>
                  <p className="font-display font-bold text-3xl text-marigold">{formatPKR(tier.price)}</p>
                  <span className="text-xs text-charcoal/40">per person</span>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.inclusions.map((item, i) => (
                    <li key={i} className="text-sm text-charcoal/80 flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hi, I'm interested in the ${tier.name} Hajj/Umrah package (${formatPKR(tier.price)}). Please share details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-truck-crimson hover:bg-truck-crimson/90 text-warm-ivory font-semibold text-sm px-4 py-3.5 rounded-lg transition-colors"
                >
                  <WhatsApp className="w-4 h-4" />
                  Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
