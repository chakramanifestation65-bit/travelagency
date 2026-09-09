export const WHATSAPP_NUMBER = '923398867672';
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function waLink(text: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export const PHONE_DISPLAY = '0339 886 7672';
export const PHONE_TEL = '+923398867672';
export const EMAIL = 'info@flywheelpk.com';
export const ADDRESS = 'Office 12, Blue Area, Islamabad, Pakistan';
export const OFFICE_HOURS = 'Mon–Sat: 9:00 AM – 8:00 PM';

export type Destination = {
  name: string;
  type: 'Domestic' | 'International';
  price: number;
  image: string;
};

export const destinations: Destination[] = [
  { name: 'Hunza Valley', type: 'Domestic', price: 45000, image: 'https://images.pexels.com/photos/15916728/pexels-photo-15916728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Skardu', type: 'Domestic', price: 55000, image: 'https://images.pexels.com/photos/35302567/pexels-photo-35302567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Naran-Kaghan', type: 'Domestic', price: 35000, image: 'https://images.pexels.com/photos/1590114/pexels-photo-1590114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Swat Valley', type: 'Domestic', price: 32000, image: 'https://images.pexels.com/photos/11942478/pexels-photo-11942478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Fairy Meadows', type: 'Domestic', price: 48000, image: 'https://images.pexels.com/photos/29401243/pexels-photo-29401243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Neelum Valley', type: 'Domestic', price: 38000, image: 'https://images.pexels.com/photos/27453961/pexels-photo-27453961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Murree', type: 'Domestic', price: 18000, image: 'https://images.pexels.com/photos/13458601/pexels-photo-13458601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Gilgit-Baltistan', type: 'Domestic', price: 52000, image: 'https://images.pexels.com/photos/27244349/pexels-photo-27244349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Kumrat Valley', type: 'Domestic', price: 42000, image: 'https://images.pexels.com/photos/13063791/pexels-photo-13063791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Dubai / UAE', type: 'International', price: 185000, image: 'https://images.pexels.com/photos/5577693/pexels-photo-5577693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Turkey', type: 'International', price: 210000, image: 'https://images.pexels.com/photos/8518777/pexels-photo-8518777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Thailand', type: 'International', price: 195000, image: 'https://images.pexels.com/photos/30540817/pexels-photo-30540817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Malaysia', type: 'International', price: 175000, image: 'https://images.pexels.com/photos/9395978/pexels-photo-9395978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Azerbaijan', type: 'International', price: 230000, image: 'https://images.pexels.com/photos/33395618/pexels-photo-33395618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Maldives', type: 'International', price: 320000, image: 'https://images.pexels.com/photos/9394311/pexels-photo-9394311.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export type TripPackage = {
  id: string;
  title: string;
  destination: string;
  category: 'Domestic' | 'International' | 'Honeymoon' | 'Family' | 'Group' | 'Corporate';
  duration: string;
  nights: number;
  price: number;
  image: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: string[];
  perPerson: number;
  featured?: boolean;
};

export const packages: TripPackage[] = [
  {
    id: 'hunza-explorer',
    title: 'Hunza Valley Explorer',
    destination: 'Hunza Valley',
    category: 'Domestic',
    duration: '5 Days / 4 Nights',
    nights: 4,
    price: 45000,
    image: 'https://images.pexels.com/photos/19442083/pexels-photo-19442083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['AC transport from Islamabad', '3-star hotel with breakfast', 'Local guide', 'Sightseeing per itinerary'],
    exclusions: ['Lunch and dinner', 'Personal expenses', 'Travel insurance', 'Entry tickets to forts'],
    itinerary: ['Day 1: Islamabad → Naran → Chilas', 'Day 2: Chilas → Hunza (Karakoram Highway)', 'Day 3: Attabad Lake & Passu Cones', 'Day 4: Khunjerab Pass & Sost', 'Day 5: Hunza → Besham → Islamabad'],
    perPerson: 45000,
    featured: true,
  },
  {
    id: 'skardu-adventure',
    title: 'Skardu Adventure Trek',
    destination: 'Skardu',
    category: 'Domestic',
    duration: '6 Days / 5 Nights',
    nights: 5,
    price: 55000,
    image: 'https://images.pexels.com/photos/27948636/pexels-photo-27948636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['Jeep transport', 'Hotel + camping mix', 'All meals', 'Local guide & porter'],
    exclusions: ['Airfare to Skardu', 'Personal gear', 'Tips', 'Drinks'],
    itinerary: ['Day 1: Islamabad → Chilas', 'Day 2: Chilas → Skardu', 'Day 3: Shigar Valley & Fort', 'Day 4: Deosai Plains', 'Day 5: Shangrila & Upper Kachura', 'Day 6: Skardu → Islamabad'],
    perPerson: 55000,
  },
  {
    id: 'naran-family',
    title: 'Naran-Kaghan Family Getaway',
    destination: 'Naran-Kaghan',
    category: 'Family',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 35000,
    image: 'https://images.pexels.com/photos/5272416/pexels-photo-5272416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['AC coaster transport', 'Family hotel rooms', 'Breakfast & dinner', 'Lake Saif-ul-Maluk trip'],
    exclusions: ['Lunch', 'Personal shopping', 'Jeep for lake (optional)', 'Travel insurance'],
    itinerary: ['Day 1: Islamabad → Naran', 'Day 2: Lake Saif-ul-Maluk', 'Day 3: Babusar Top & Kaghan', 'Day 4: Naran → Islamabad'],
    perPerson: 35000,
  },
  {
    id: 'swat-honeymoon',
    title: 'Swat Honeymoon Retreat',
    destination: 'Swat Valley',
    category: 'Honeymoon',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 52000,
    image: 'https://images.pexels.com/photos/186985/pexels-photo-186985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['Private car transfer', 'Deluxe room with decor', 'Candlelight dinner', 'Kalam & Mahodand Lake trip'],
    exclusions: ['Lunch', 'Extra activities', 'Personal expenses', 'Tips'],
    itinerary: ['Day 1: Islamabad → Mingora → Kalam', 'Day 2: Mahodand Lake excursion', 'Day 3: Ushu Forest & Gabina', 'Day 4: Kalam → Islamabad'],
    perPerson: 52000,
  },
  {
    id: 'fairy-meadows-group',
    title: 'Fairy Meadows Group Trek',
    destination: 'Fairy Meadows',
    category: 'Group',
    duration: '5 Days / 4 Nights',
    nights: 4,
    price: 48000,
    image: 'https://images.pexels.com/photos/38337954/pexels-photo-38337954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['AC transport + jeep', 'Cottage + camping', 'All meals', 'Local guide & porter support'],
    exclusions: ['Personal gear', 'Drinks', 'Tips', 'Insurance'],
    itinerary: ['Day 1: Islamabad → Chilas', 'Day 2: Chilas → Raikot → Fairy Meadows', 'Day 3: Nanga Parbat Base Camp trek', 'Day 4: Fairy Meadows → Chilas', 'Day 5: Chilas → Islamabad'],
    perPerson: 48000,
  },
  {
    id: 'dubai-shopping',
    title: 'Dubai Shopping Festival Tour',
    destination: 'Dubai / UAE',
    category: 'International',
    duration: '5 Days / 4 Nights',
    nights: 4,
    price: 185000,
    image: 'https://images.pexels.com/photos/19664340/pexels-photo-19664340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['Return airfare (Islamabad–Dubai)', '4-star hotel + breakfast', 'Desert safari + Dhow cruise', 'Dubai city tour'],
    exclusions: ['Lunch & dinner', 'Visa fees', 'Burj Khalifa ticket', 'Personal shopping'],
    itinerary: ['Day 1: Islamabad → Dubai, Dhow cruise', 'Day 2: Dubai city tour + Mall', 'Day 3: Desert safari + BBQ', 'Day 4: Abu Dhabi day trip', 'Day 5: Free day → Islamabad'],
    perPerson: 185000,
  },
  {
    id: 'turkey-cultural',
    title: 'Turkey Cultural & Cappadocia',
    destination: 'Turkey',
    category: 'International',
    duration: '7 Days / 6 Nights',
    nights: 6,
    price: 210000,
    image: 'https://images.pexels.com/photos/11781479/pexels-photo-11781479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['Return airfare', '4-star hotel + breakfast', 'Cappadocia hot air balloon', 'Istanbul + Cappadocia tours'],
    exclusions: ['Lunch & dinner', 'Visa fees', 'Optional tours', 'Personal expenses'],
    itinerary: ['Day 1: Islamabad → Istanbul', 'Day 2: Istanbul city tour', 'Day 3: Bosphorus cruise', 'Day 4: Fly to Cappadocia', 'Day 5: Hot air balloon + tour', 'Day 6: Cappadocia → Istanbul', 'Day 7: Istanbul → Islamabad'],
    perPerson: 210000,
    featured: true,
  },
  {
    id: 'thailand-island',
    title: 'Thailand Island & Bangkok',
    destination: 'Thailand',
    category: 'International',
    duration: '6 Days / 5 Nights',
    nights: 5,
    price: 195000,
    image: 'https://images.pexels.com/photos/4100105/pexels-photo-4100105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['Return airfare', '4-star hotel + breakfast', 'Coral island tour', 'Bangkok temple tour'],
    exclusions: ['Lunch & dinner', 'Visa fees', 'Phi Phi island (optional)', 'Personal expenses'],
    itinerary: ['Day 1: Islamabad → Bangkok', 'Day 2: Bangkok temple tour', 'Day 3: Bangkok → Phuket', 'Day 4: Coral island tour', 'Day 5: Free day in Phuket', 'Day 6: Phuket → Islamabad'],
    perPerson: 195000,
  },
  {
    id: 'maldives-honeymoon',
    title: 'Maldives Overwater Honeymoon',
    destination: 'Maldives',
    category: 'Honeymoon',
    duration: '5 Days / 4 Nights',
    nights: 4,
    price: 320000,
    image: 'https://images.pexels.com/photos/1287455/pexels-photo-1287455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['Return airfare', 'Overwater villa + breakfast', 'Speedboat transfers', 'Sunset dolphin cruise'],
    exclusions: ['Lunch & dinner', 'Visa fees', 'Spa treatments', 'Diving (optional)'],
    itinerary: ['Day 1: Islamabad → Male → Resort', 'Day 2: Snorkeling & island hopping', 'Day 3: Sunset dolphin cruise', 'Day 4: Spa & free day', 'Day 5: Resort → Male → Islamabad'],
    perPerson: 320000,
    featured: true,
  },
  {
    id: 'malaysia-twin',
    title: 'Malaysia Twin Towers Tour',
    destination: 'Malaysia',
    category: 'International',
    duration: '5 Days / 4 Nights',
    nights: 4,
    price: 175000,
    image: 'https://images.pexels.com/photos/11719269/pexels-photo-11719269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['Return airfare', '4-star hotel + breakfast', 'Kuala Lumpur city tour', 'Genting Highlands day trip'],
    exclusions: ['Lunch & dinner', 'Visa fees', 'Theme park tickets', 'Personal expenses'],
    itinerary: ['Day 1: Islamabad → Kuala Lumpur', 'Day 2: KL city tour + Petronas', 'Day 3: Genting Highlands', 'Day 4: Batu Caves + free time', 'Day 5: KL → Islamabad'],
    perPerson: 175000,
  },
  {
    id: 'baku-corporate',
    title: 'Azerbaijan Baku Corporate Retreat',
    destination: 'Azerbaijan',
    category: 'Corporate',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 230000,
    image: 'https://images.pexels.com/photos/19998460/pexels-photo-19998460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['Return airfare', '4-star hotel + breakfast', 'Conference room setup', 'Baku city + Gobustan tour'],
    exclusions: ['Lunch & dinner', 'Visa fees', 'Team activities (optional)', 'Personal expenses'],
    itinerary: ['Day 1: Islamabad → Baku', 'Day 2: Conference + welcome dinner', 'Day 3: Gobustan + Mud Volcanoes', 'Day 4: Baku → Islamabad'],
    perPerson: 230000,
  },
  {
    id: 'neelum-valley-group',
    title: 'Neelum Valley Group Escape',
    destination: 'Neelum Valley',
    category: 'Group',
    duration: '4 Days / 3 Nights',
    nights: 3,
    price: 38000,
    image: 'https://images.pexels.com/photos/12522461/pexels-photo-12522461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    inclusions: ['AC coaster transport', 'Guest house stay', 'Breakfast & dinner', 'Sharda & Kel excursion'],
    exclusions: ['Lunch', 'Jeep for Kel (optional)', 'Personal expenses', 'Insurance'],
    itinerary: ['Day 1: Islamabad → Muzaffarabad → Keran', 'Day 2: Sharda & Kutton', 'Day 3: Kel & Taobat', 'Day 4: Neelum → Islamabad'],
    perPerson: 38000,
  },
];

export type HajjTier = {
  name: string;
  duration: string;
  hotelDistance: string;
  price: number;
  inclusions: string[];
  badge?: string;
};

export const hajjTiers: HajjTier[] = [
  {
    name: 'Economy',
    duration: '20 Days',
    hotelDistance: '900m from Haram',
    price: 850000,
    inclusions: ['Shared room (4 persons)', 'Half-board meals', 'Group transport', 'Religious guide'],
  },
  {
    name: 'Standard',
    duration: '25 Days',
    hotelDistance: '500m from Haram',
    price: 1150000,
    inclusions: ['Shared room (2 persons)', 'Full-board meals', 'Private AC transport', 'Ziyarat tours included', 'Religious scholar'],
    badge: 'Most Popular',
  },
  {
    name: 'VIP',
    duration: '30 Days',
    hotelDistance: '200m from Haram',
    price: 1650000,
    inclusions: ['Private room', 'Premium full-board', 'Private luxury transport', 'All ziyarat tours', 'Dedicated scholar & assistant'],
  },
];

export type Testimonial = {
  name: string;
  city: string;
  trip: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  { name: 'Ayesha Khan', city: 'Islamabad', trip: 'Hunza Valley Explorer', rating: 5, quote: 'Absolutely seamless experience from start to finish. The guide was knowledgeable and the hotels exceeded expectations. Will book again!' },
  { name: 'Bilal Ahmed', city: 'Lahore', trip: 'Dubai Shopping Festival', rating: 5, quote: 'Everything was handled professionally — visa, flights, hotel, tours. Felt completely taken care of throughout the trip.' },
  { name: 'Sana Malik', city: 'Karachi', trip: 'Maldives Honeymoon', rating: 5, quote: 'The overwater villa was a dream. FlyWheel PK made our honeymoon truly special with thoughtful touches and great planning.' },
  { name: 'Imran Yousaf', city: 'Rawalpindi', trip: 'Umrah Standard Package', rating: 5, quote: 'Alhamdulillah, a spiritually fulfilling journey. The hotel was close to Haram and the scholar guided us through every ritual.' },
  { name: 'Fatima Noor', city: 'Peshawar', trip: 'Turkey Cultural Tour', rating: 4, quote: 'Loved every moment in Istanbul and Cappadocia. The hot air balloon ride was unforgettable. Smooth arrangements throughout.' },
  { name: 'Usman Tariq', city: 'Faisalabad', trip: 'Skardu Adventure Trek', rating: 5, quote: 'Best trekking experience of my life. The team was professional, safety was a priority, and the scenery was breathtaking.' },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  { question: 'How do I book a trip?', answer: 'Simply message us on WhatsApp or browse our packages and click "Book on WhatsApp." Our team will confirm availability, send a custom quote, and guide you through the deposit process.' },
  { question: 'What payment methods do you accept?', answer: 'We accept bank transfer, Easypaisa, and JazzCash. A deposit (usually 30–50%) confirms your booking, with the balance due before departure.' },
  { question: 'What is your cancellation policy?', answer: 'Cancellations 14+ days before departure get a 70% refund. Within 7–14 days, 40% refund. Within 7 days, the deposit is non-refundable. Hajj/Umrah packages follow a separate policy — ask our team.' },
  { question: 'Do you offer group discounts?', answer: 'Yes! Groups of 6 or more receive a 10% discount, and groups of 12+ receive 15%. Corporate and custom group packages can be tailored to your budget.' },
  { question: 'What is included in the package prices?', answer: 'Most packages include transport, hotel accommodation, breakfast (and sometimes dinner), local guide, and sightseeing per the itinerary. Each package card lists specific inclusions and exclusions.' },
  { question: 'What about passport and visa requirements?', answer: 'A valid passport (6+ months validity) is required for all international trips. We assist with tourist visas for Dubai, Schengen, UK, Thailand, Malaysia, and Saudi Arabia. Visa fees are usually not included in package prices.' },
  { question: 'What is the difference between Hajj and Umrah?', answer: 'Hajj is a mandatory pilgrimage performed during specific days of the Islamic month of Dhul-Hijjah. Umrah can be performed any time of year and is shorter. We offer packages for both — our team can advise which suits you.' },
];

export const visaCountries = [
  { country: 'Dubai / UAE', note: 'Tourist visa, 30-day stay, 3–5 working days processing' },
  { country: 'Schengen', note: 'Multiple European countries, 90-day stay, 10–15 working days' },
  { country: 'United Kingdom', note: 'Standard visitor visa, 6-month stay, 15–20 working days' },
  { country: 'Thailand', note: 'Tourist visa or visa-on-arrival, 15–30 day stay' },
  { country: 'Malaysia', note: 'e-Visa available, 30-day stay, 3–5 working days' },
  { country: 'Saudi Arabia (Umrah)', note: 'Umrah visa, 30-day stay, 5–7 working days' },
];

export const whyUs = [
  { icon: 'shield', title: 'Licensed & Registered', text: 'PTDC-registered and Ministry of Religious Affairs licensed for Hajj & Umrah operations.' },
  { icon: 'headset', title: '24/7 WhatsApp Support', text: 'From booking to return, our team is one message away — anytime, anywhere.' },
  { icon: 'map', title: 'Local Guides', text: 'Experienced local guides who know the routes, culture, and hidden gems of every destination.' },
  { icon: 'users', title: 'Custom & Group Itineraries', text: 'Flexible packages for families, corporate groups, and custom routes tailored to your schedule.' },
  { icon: 'tag', title: 'Transparent Pricing', text: 'No hidden charges. What you see is what you pay — every inclusion and exclusion is listed upfront.' },
  { icon: 'file', title: 'Visa Assistance', text: 'Complete visa support for Dubai, Schengen, UK, Thailand, Malaysia, and Saudi Arabia.' },
];

export const bookingSteps = [
  { step: 1, title: 'Browse or Message', text: 'Explore packages online or send us a WhatsApp message with your destination and dates.' },
  { step: 2, title: 'Get a Custom Quote', text: 'Our team sends a personalized quote with itinerary, inclusions, and per-person pricing.' },
  { step: 3, title: 'Confirm with Deposit', text: 'Pay 30–50% via bank transfer, Easypaisa, or JazzCash to lock in your booking.' },
  { step: 4, title: 'Travel with Support', text: 'Enjoy your trip with 24/7 WhatsApp support from departure to safe return home.' },
];
