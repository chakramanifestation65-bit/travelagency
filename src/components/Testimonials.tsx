import { testimonials } from '../data';
import { Star } from './Icons';

export default function Testimonials() {
  return (
    <section className="py-20 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-indigo-night mb-3">
            Stories from our travelers
          </h2>
          <p className="text-charcoal/70 max-w-2xl">
            Don't just take our word for it — hear from the thousands who've explored the world with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < t.rating ? 'text-marigold' : 'text-charcoal/15'}`}
                  />
                ))}
              </div>

              <p className="text-charcoal/80 text-sm leading-relaxed mb-5 flex-1">"{t.quote}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-charcoal/10">
                <div className="w-10 h-10 rounded-full bg-indigo-night flex items-center justify-center text-warm-ivory font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-indigo-night">{t.name}</p>
                  <p className="text-xs text-charcoal/50">{t.city} · {t.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
