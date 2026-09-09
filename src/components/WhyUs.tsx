import { whyUs, bookingSteps } from '../data';
import { iconMap } from './Icons';

export default function WhyUs() {
  return (
    <>
      <section id="why-us" className="py-20 bg-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-indigo-night mb-3">
              The FlyWheel PK difference
            </h2>
            <p className="text-charcoal/70 max-w-2xl">
              We've been crafting journeys for over a decade. Here's why thousands of travelers trust us
              with their most important trips.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-indigo-night flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-5 h-5 text-marigold" />}
                  </div>
                  <h3 className="font-display font-bold text-lg text-indigo-night mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-indigo-night mb-3">
              How booking works
            </h2>
            <p className="text-charcoal/70 max-w-2xl">
              Four simple steps from first message to safe return.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-warm-ivory rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display font-bold text-3xl text-marigold leading-none">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-indigo-night mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
