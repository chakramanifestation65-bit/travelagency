import { visaCountries, waLink } from '../data';
import { FileText, WhatsApp, Check } from './Icons';

export default function VisaAssistance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-indigo-night mb-4">
              We make visa applications stress-free
            </h2>
            <p className="text-charcoal/70 mb-6 leading-relaxed">
              Navigating visa requirements can be overwhelming. Our experienced team guides you through
              documentation, application forms, and submission — for a wide range of destinations.
            </p>

            <div className="space-y-3">
              {visaCountries.map((v) => (
                <div
                  key={v.country}
                  className="flex items-start gap-3 bg-warm-ivory rounded-lg p-4"
                >
                  <Check className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-indigo-night">{v.country}</h3>
                    <p className="text-sm text-charcoal/60">{v.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={waLink("Hi, I'd like to ask about visa assistance for my trip. Can you help?")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-marigold hover:bg-marigold/90 text-indigo-night font-bold text-sm px-6 py-3.5 rounded-lg transition-colors"
            >
              <WhatsApp className="w-4 h-4" />
              Ask about your visa
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/20277839/pexels-photo-20277839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Masjid Nabawi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-indigo-night text-warm-ivory rounded-xl p-5 shadow-lg hidden sm:block">
              <div className="text-xs font-semibold uppercase tracking-wide text-marigold mb-1">Success rate</div>
              <p className="font-display font-bold text-2xl">95%+</p>
              <p className="text-xs text-warm-ivory/70">visa approval rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
