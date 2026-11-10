import { SalonBranch, ServiceItem, BeautySpecialist, ProductItem, MembershipTier } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_luxury_salon_1794343468895.jpg';
export const HAIR_IMAGE = '/src/assets/images/service_hair_styling_1794343472680.jpg';
export const FACIAL_IMAGE = '/src/assets/images/service_skincare_facial_1794343470785.jpg';
export const NAILS_IMAGE = '/src/assets/images/service_nail_couture_1794343471000.jpg';

export const SALON_BRANCHES: SalonBranch[] = [
  {
    id: 'branch-charleston',
    name: 'Aurélia Charleston Historic Sanctuary',
    city: 'Charleston',
    state: 'SC',
    zipCode: '29401',
    district: 'Historic District / King Street',
    address: '284 King Street, Charleston, SC 29401',
    phone: '+1 (843) 723-8890',
    email: 'charleston@aureliabeaute.com',
    operatingHours: 'Mon – Sat: 9:00 AM – 7:00 PM · Sun: 11:00 AM – 5:00 PM EST',
    amenities: [
      'Private Lowcountry Courtyard & Veranda',
      'Champagne & Botanical Sweet Tea Bar',
      'Aromatherapy Shower Suites',
      'Valet Concierge on King Street',
      'High-Speed Wi-Fi & Private Work Cabanas'
    ],
    treatmentRooms: 12,
    staffCount: 18,
    coordinates: { lat: 32.7816, lng: -79.9348 },
    image: HERO_IMAGE,
    googleMapQuery: 'King Street Charleston SC 29401',
    licenseNumber: 'SC-SALON-LLR-88210'
  },
  {
    id: 'branch-greenville',
    name: 'Aurélia Greenville Main Street Penthouse',
    city: 'Greenville',
    state: 'SC',
    zipCode: '29601',
    district: 'Downtown Main Street / Reedy Falls',
    address: '103 N Main Street, Suite 400, Greenville, SC 29601',
    phone: '+1 (864) 235-4411',
    email: 'greenville@aureliabeaute.com',
    operatingHours: 'Mon – Sat: 9:00 AM – 7:00 PM · Sun: 11:00 AM – 5:00 PM EST',
    amenities: [
      'Blue Ridge Foothills Panoramic Terrace',
      'Dedicated Bridal Dressing Salon',
      'Acoustic Sound Bath Relaxation Pods',
      'Private Elevator Access'
    ],
    treatmentRooms: 10,
    staffCount: 15,
    coordinates: { lat: 34.8526, lng: -82.3940 },
    image: HERO_IMAGE,
    googleMapQuery: 'North Main Street Greenville SC 29601',
    licenseNumber: 'SC-SALON-LLR-88211'
  },
  {
    id: 'branch-columbia',
    name: 'Aurélia Columbia Vista Suite',
    city: 'Columbia',
    state: 'SC',
    zipCode: '29201',
    district: 'The Congaree Vista',
    address: '812 Gervais Street, Suite 200, Columbia, SC 29201',
    phone: '+1 (803) 779-7722',
    email: 'columbia@aureliabeaute.com',
    operatingHours: 'Mon – Sat: 9:00 AM – 7:00 PM · Closed Sunday EST',
    amenities: [
      'Executive Express Blowout Lounge',
      'Medical-grade Autoclave Sterilization Suite',
      'Private Nail Cabanas',
      'Reserved Covered Garage Parking'
    ],
    treatmentRooms: 9,
    staffCount: 14,
    coordinates: { lat: 33.9995, lng: -81.0378 },
    image: HERO_IMAGE,
    googleMapQuery: 'Gervais Street Columbia SC 29201',
    licenseNumber: 'SC-SALON-LLR-88212'
  },
  {
    id: 'branch-hiltonhead',
    name: 'Aurélia Hilton Head Coastal Resort Pavilion',
    city: 'Hilton Head Island',
    state: 'SC',
    zipCode: '29928',
    district: 'Sea Pines / South Beach',
    address: '100 Lighthouse Road, Pavilion 3, Hilton Head Island, SC 29928',
    phone: '+1 (843) 671-3300',
    email: 'hiltonhead@aureliabeaute.com',
    operatingHours: 'Mon – Sun: 9:00 AM – 6:30 PM EST',
    amenities: [
      'Oceanfront Salt Air Relaxation Porch',
      'Lowcountry Sea Salt & Botanical Body Spa',
      'Mother & Daughter Spa Suites',
      'Resort Golf Cart Shuttle Concierge'
    ],
    treatmentRooms: 8,
    staffCount: 12,
    coordinates: { lat: 32.1352, lng: -80.8126 },
    image: HERO_IMAGE,
    googleMapQuery: 'Lighthouse Road Hilton Head Island SC 29928',
    licenseNumber: 'SC-SALON-LLR-88213'
  },
  {
    id: 'branch-mtpleasant',
    name: 'Aurélia Mount Pleasant Waterfront Villa',
    city: 'Mount Pleasant',
    state: 'SC',
    zipCode: '29464',
    district: 'Shem Creek Waterfront / Coleman Blvd',
    address: '410 W Coleman Blvd, Mount Pleasant, SC 29464',
    phone: '+1 (843) 884-9988',
    email: 'mtpleasant@aureliabeaute.com',
    operatingHours: 'Mon – Sat: 9:00 AM – 7:00 PM · Sun: 11:00 AM – 5:00 PM EST',
    amenities: [
      'Shem Creek Harbor Sunset View Cabanas',
      'Organic Herbal Infusion Apothecary',
      'Drive-up Dedicated Portico Parking',
      'Private Suite Sound Dampening'
    ],
    treatmentRooms: 9,
    staffCount: 14,
    coordinates: { lat: 32.7937, lng: -79.8826 },
    image: HERO_IMAGE,
    googleMapQuery: 'Coleman Blvd Mount Pleasant SC 29464',
    licenseNumber: 'SC-SALON-LLR-88214'
  }
];

export const SALON_SERVICES: ServiceItem[] = [
  // HAIR STUDIO
  {
    id: 'srv-balayage-couture',
    name: 'French Balayage & Glossing Ritual',
    category: 'hair',
    categoryLabel: 'Hair Studio',
    tagline: 'Bespoke hand-painted dimensional brilliance customized to your complexion',
    description: 'Custom hand-painted French balayage using ammonia-free European pigments, followed by our signature hyaluronic acid gloss seal to achieve multidimensional reflections with seamless root growth.',
    durationMinutes: 180,
    priceUSD: 285,
    image: HAIR_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    preparation: 'Arrive with dry, unwashed hair (1–2 days post-wash). Avoid clarifying treatments beforehand.',
    aftercare: 'Use sulfate-free color-safe cleansing elixirs; allow 48 hours before your first post-treatment wash. Protect with UV thermal defense.',
    popularAddOns: ['Olaplex Bond Multiplier Infusion (+$45)', 'Scalp Detox & Micro-Exfoliation (+$35)'],
    isFeatured: true
  },
  {
    id: 'srv-keratin-silk',
    name: 'Caviar Silk Keratin Infusion',
    category: 'hair',
    categoryLabel: 'Hair Studio',
    tagline: 'Formaldehyde-free smoothing elixir formulated for coastal Southern humidity',
    description: 'Advanced amino-acid smoothing treatment enriched with wild caviar extracts that relaxes stubborn frizz and resists Lowcountry humidity while preserving natural volume and bounce.',
    durationMinutes: 150,
    priceUSD: 320,
    image: HAIR_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    preparation: 'Please allow a generous 2.5-hour relaxation window in our styling suite.',
    aftercare: 'Keep hair completely dry for 48 hours and avoid hair clips or elastic bands.',
    popularAddOns: ['Ends Reshaping Trim (+$35)', 'Biotin Density Elixir (+$28)'],
    isFeatured: true
  },
  {
    id: 'srv-couture-cut',
    name: 'Precision Signature Cut & Blowout',
    category: 'hair',
    categoryLabel: 'Hair Studio',
    tagline: 'Architectural haircutting tailored to facial contours and natural texture',
    description: 'Detailed diagnostic consultation, double cleansing with botanical scalp massage, custom dimensional haircut, and salon-grade bouncy blowout with thermal round brush finish.',
    durationMinutes: 60,
    priceUSD: 95,
    image: HAIR_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    popularAddOns: ['Moroccan Argan Deep Mask (+$35)', 'Curling Iron Luxe Finish (+$20)'],
    isFeatured: false
  },

  // NAIL LOUNGE
  {
    id: 'srv-gold-couture-mani',
    name: 'Aurélia 24K Gold Couture Manicure',
    category: 'nails',
    categoryLabel: 'Nail Lounge',
    tagline: 'Russian dry precision cuticle detailing with champagne gold micro-accents',
    description: 'Flawless dry e-file cuticle alignment, organic brown sugar hand polish, nourishing warm camellia oil soak, structured gel base, and delicate hand-placed 24K gold leaf accents.',
    durationMinutes: 75,
    priceUSD: 85,
    image: NAILS_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    preparation: 'Please inform us if you require prior gel or acrylic removal (+30 min).',
    aftercare: 'Hydrate cuticles daily with cold-pressed jojoba or almond oil.',
    popularAddOns: ['Gel Extension Reinforcement (+$40)', 'Warm Paraffin Glove (+$25)'],
    isFeatured: true
  },
  {
    id: 'srv-pedicure-botanical',
    name: 'Imperial Botanical Foot Retreat',
    category: 'nails',
    categoryLabel: 'Nail Lounge',
    tagline: 'Volcanic scrub, intensive callus therapy, and restorative reflexology',
    description: 'Warm sea salt soak with eucalyptus and rose petals, gentle callus refining, organic foot scrub, relaxing 20-minute acupressure foot massage, and gel polish finish.',
    durationMinutes: 90,
    priceUSD: 95,
    image: NAILS_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    aftercare: 'Wear open-toed footwear if selecting classic lacquer instead of gel.',
    popularAddOns: ['Heel Collagen Cocoon (+$20)', 'Micro-French Tip Detailing (+$15)'],
    isFeatured: false
  },

  // FACIAL & SKINCARE STUDIO
  {
    id: 'srv-hydra-radiance',
    name: 'Botanical Radiance Hydra-Infusion',
    category: 'facial',
    categoryLabel: 'Facial & Skincare Studio',
    tagline: 'Non-invasive vortex extraction, deep hydration, and cryo-firming',
    description: 'Triple-phase dermal vortex cleansing, mild enzymatic fruit peeling, antioxidant serum infusion, lymphatic jade roller massage, and cooling collagen biocellulose mask.',
    durationMinutes: 75,
    priceUSD: 175,
    image: FACIAL_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    preparation: 'Discontinue retinol and chemical exfoliants 48 hours prior.',
    aftercare: 'Wear SPF 50 daily; avoid direct midday sunlight and saunas for 24 hours.',
    popularAddOns: ['LED Photon Collagen Rejuvenation (+$35)', 'Décolleté Firming Treatment (+$45)'],
    isFeatured: true
  },
  {
    id: 'srv-caviar-lift',
    name: 'Black Caviar & Peptide Youth Sculpt',
    category: 'facial',
    categoryLabel: 'Facial & Skincare Studio',
    tagline: 'Deep contouring myofascial lift and cellular firmness therapy',
    description: 'Intense anti-aging ritual pairing French black caviar proteins with marine peptides. Includes buccal facial contouring massage and microcurrent skin toning.',
    durationMinutes: 90,
    priceUSD: 245,
    image: FACIAL_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-mtpleasant'],
    preparation: 'Recommended before galas and photography sessions; delivers instantaneous radiance.',
    aftercare: 'Drink plenty of water to enhance lymphatic drainage benefits.',
    popularAddOns: ['Eye Contour Brightener (+$30)'],
    isFeatured: false
  },

  // LASHES & BROWS
  {
    id: 'srv-silk-lash-couture',
    name: 'Cashmere Feather Lash Extension',
    category: 'lashes-brows',
    categoryLabel: 'Lashes & Brows',
    tagline: 'Ultra-lightweight Japanese cashmere lashes customized to eye architecture',
    description: 'Single-strand and hybrid feather-light lashes applied individually with hypoallergenic medical-grade adhesive for fluttery, weightless elegance.',
    durationMinutes: 105,
    priceUSD: 160,
    image: FACIAL_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    preparation: 'Arrive with clean, makeup-free eyes; remove contact lenses prior to application.',
    aftercare: 'Keep lashes dry for 24 hours; avoid oil-based makeup cleansers.',
    popularAddOns: ['Keratin Lash Strengthener (+$20)', 'Brow Shaping & Tint (+$35)'],
    isFeatured: false
  },
  {
    id: 'srv-brow-lamination',
    name: '3D Nano Brow Sculpt & Lamination',
    category: 'lashes-brows',
    categoryLabel: 'Lashes & Brows',
    tagline: 'Fuller, feathery brows set with keratin peptide alignment',
    description: 'Gentle restructuring solution aligns brow hairs into a feathered, uniform arch, accompanied by custom vegetable tinting and precision tweezer sculpting.',
    durationMinutes: 60,
    priceUSD: 85,
    image: FACIAL_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    preparation: 'Avoid brow waxing or threading for 1 week prior.',
    aftercare: 'Apply brow conditioner daily; avoid water exposure for 24 hours.',
    popularAddOns: ['Under-Eye Hydrating Gel Pads (+$15)'],
    isFeatured: false
  },

  // MAKEUP STUDIO
  {
    id: 'srv-red-carpet-makeup',
    name: 'Red Carpet Gala & Editorial Makeup',
    category: 'makeup',
    categoryLabel: 'Makeup Studio',
    tagline: 'Long-wearing HD elegance for weddings, galas, and photographic portraits',
    description: 'Pre-makeup dermal hydration prep, bespoke airbrush or luxury cream foundation, customized lash strip application, and humidity-resistant setting finish.',
    durationMinutes: 75,
    priceUSD: 135,
    image: HAIR_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    preparation: 'Wear a button-down or robe to prevent contact with finished makeup.',
    aftercare: 'Includes a complimentary touch-up kit with blotting sheets and lip sample.',
    popularAddOns: ['Body Shimmer Radiance Glow (+$25)'],
    isFeatured: false
  },

  // SPA & WELLNESS
  {
    id: 'srv-aroma-stone-massage',
    name: 'Warm Basalt & Sweet Jasmine Massage',
    category: 'body-wellness',
    categoryLabel: 'Spa & Wellness',
    tagline: 'Volcanic basalt stones infused with organic southern botanical oils',
    description: 'Deep relaxation ritual using heated volcanic basalt stones to melt muscular tension, paired with cold-pressed sweet almond and jasmine blossom essential oils.',
    durationMinutes: 90,
    priceUSD: 145,
    image: FACIAL_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-columbia', 'branch-hiltonhead', 'branch-mtpleasant'],
    preparation: 'Avoid heavy meals 1 hour prior to appointment.',
    aftercare: 'Stay well-hydrated post-session to support tension release.',
    popularAddOns: ['Lowcountry Sea Salt Polish (+$45)', 'Foot Reflexology Accent (+$30)'],
    isFeatured: false
  },

  // VIP EXPERIENCES
  {
    id: 'srv-grand-empress-day',
    name: 'The Grand Empress Day Retreat (VIP Package)',
    category: 'vip-packages',
    categoryLabel: 'VIP Packages',
    tagline: 'A comprehensive 5-hour private suite transformation and wellness journey',
    description: 'Our most celebrated VIP journey. Includes: Botanical Hydra-Infusion facial, Caviar Keratin hair ritual, 24K Gold manicure & pedicure, warm basalt massage, and chilled champagne or artisanal tea served in your private suite.',
    durationMinutes: 300,
    priceUSD: 595,
    image: HERO_IMAGE,
    eligibleBranches: ['branch-charleston', 'branch-greenville', 'branch-mtpleasant'],
    preparation: 'A private suite is reserved exclusively for you for the full day.',
    aftercare: 'Includes custom home-care travel kit and personal stylist concierge direct line.',
    popularAddOns: ['Private Chauffeur Pickup (Charleston/Greenville Metro) (+$95)'],
    isFeatured: true
  }
];

export const BEAUTY_SPECIALISTS: BeautySpecialist[] = [
  {
    id: 'spec-camille',
    name: 'Camille De La Rosa',
    role: 'Creative Hair Director & Balayage Master',
    specialties: ['French Balayage', 'Couture Cuts', 'Color Transformation'],
    branchId: 'branch-charleston',
    experienceYears: 12,
    rating: 4.98,
    reviewsCount: 342,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Trained in Paris and New York, Camille leads Aurélia’s hair artistry, styling for Southern Living, Charleston Fashion Week, and bridal editorials.',
    licenseId: 'SC-COS-49201'
  },
  {
    id: 'spec-sophia',
    name: 'Sophia Isabel Reyes',
    role: 'Lead Dermal Aesthetician',
    specialties: ['Hydra-Infusion', 'Facial Sculpting', 'Sensitive Barrier Therapy'],
    branchId: 'branch-charleston',
    experienceYears: 9,
    rating: 4.95,
    reviewsCount: 280,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Licensed esthetician specializing in non-invasive glow rituals and Lowcountry humidity barrier recovery.',
    licenseId: 'SC-EST-33109'
  },
  {
    id: 'spec-elena',
    name: 'Elena Santos-Villar',
    role: 'Master Nail Artist & Sculptor',
    specialties: ['Russian E-File', '24K Gold Nail Art', 'Structured Gel'],
    branchId: 'branch-greenville',
    experienceYears: 8,
    rating: 4.97,
    reviewsCount: 215,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Renowned across the Upstate for meticulous cuticle architecture and long-lasting structured gel.',
    licenseId: 'SC-NT-55204'
  },
  {
    id: 'spec-claire',
    name: 'Claire Chen-Montenegro',
    role: 'Senior Lash & Brow Artist',
    specialties: ['Cashmere Lashes', '3D Lamination', 'Eye Architecture'],
    branchId: 'branch-greenville',
    experienceYears: 7,
    rating: 4.94,
    reviewsCount: 198,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Master certified in feather-weight lash extensions designed for natural eye contouring.',
    licenseId: 'SC-EST-41002'
  },
  {
    id: 'spec-marielle',
    name: 'Marielle Beatrice Tan',
    role: 'Celebrity Makeup Artist & Bridal Educator',
    specialties: ['Bridal Glamour', 'Editorial Makeup', 'Pre-Gala Skin Prep'],
    branchId: 'branch-columbia',
    experienceYears: 10,
    rating: 4.99,
    reviewsCount: 310,
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
    bio: 'Celebrated for her signature lit-from-within glow featured in Lowcountry weddings and East Coast galas.',
    licenseId: 'SC-COS-60129'
  }
];

export const BOUTIQUE_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-caviar-serum',
    name: 'Aurélia L’Élixir D’Or Caviar Restorative Serum',
    brand: 'Aurélia Haute Beauté Lab',
    category: 'skincare',
    priceUSD: 145,
    volume: '1.7 fl oz / 50 ml',
    description: 'Concentrated peptide and black caviar essence that stimulates cellular collagen and imparts a glassy, luminous complexion.',
    keyBenefits: ['Deep dermal hydration', 'Fine-line smoothing', 'Antioxidant barrier protection'],
    inStock: true,
    image: HERO_IMAGE,
    rating: 4.9
  },
  {
    id: 'prod-argan-gloss',
    name: 'Silk Radiance Botanical Hair Oil',
    brand: 'Aurélia Haute Beauté Lab',
    category: 'haircare',
    priceUSD: 68,
    volume: '3.4 fl oz / 100 ml',
    description: 'Weightless finishing gloss formulated with cold-pressed Moroccan argan oil, camellia blossom, and UV thermal shields.',
    keyBenefits: ['Humidity frizz defense up to 96h', 'Glass-like sheen without weight', 'Heat protection up to 450°F'],
    inStock: true,
    image: HAIR_IMAGE,
    rating: 4.95
  },
  {
    id: 'prod-cuticle-elixir',
    name: 'Rose & 24K Gold Botanical Cuticle Elixir',
    brand: 'Aurélia Haute Beauté Lab',
    category: 'nailcare',
    priceUSD: 42,
    volume: '1.0 fl oz / 30 ml',
    description: 'Infused with real 24-karat gold flakes and organic damask rose oil to nourish cuticles and fortify nail bed flexibility.',
    keyBenefits: ['Prevents hangnails', 'Instant cuticle softening', 'Subtle rose fragrance'],
    inStock: true,
    image: NAILS_IMAGE,
    rating: 4.88
  },
  {
    id: 'prod-silk-pillowcase',
    name: 'Pure Mulberry Silk Beauty Sleep Set (Champagne)',
    brand: 'Aurélia Maison',
    category: 'accessories',
    priceUSD: 85,
    volume: 'Queen / King 22 Momme + Silk Eye Mask',
    description: 'Certified 100% 22 Momme grade-6A mulberry silk to prevent hair friction breakage, facial sleep creases, and skin moisture loss.',
    keyBenefits: ['Hypoallergenic & frictionless', 'Maintains skin hydration', 'Gentle on eyelash extensions'],
    inStock: true,
    image: HERO_IMAGE,
    rating: 5.0
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'tier-essential',
    name: 'Beauty Essential',
    minimumSpendUSD: 0,
    pointsMultiplier: 1.0,
    color: '#A48D84',
    perks: [
      'Earn 1 point per $1 spent',
      'Welcome gift on your first salon visit',
      'Digital booking & reschedule pass'
    ]
  },
  {
    id: 'tier-signature',
    name: 'Beauty Signature',
    minimumSpendUSD: 1200,
    pointsMultiplier: 1.25,
    color: '#C6A667',
    perks: [
      'Earn 1.25 points per $1 spent',
      'Complimentary Birthday Scalp Detox ($95 value)',
      '10% privilege discount on boutique products',
      'Priority waitlist placement'
    ]
  },
  {
    id: 'tier-gold',
    name: 'Beauty Gold',
    minimumSpendUSD: 2800,
    pointsMultiplier: 1.5,
    color: '#DFCA9B',
    perks: [
      'Earn 1.5 points per $1 spent',
      'Complimentary champagne or botanical sweet tea on every visit',
      '15% privilege discount on all services and boutique retail',
      'Complimentary blowout upgrade with any balayage or color ritual',
      'Exclusive invitations to private masterclasses'
    ]
  },
  {
    id: 'tier-platinum',
    name: 'Beauty Platinum VIP',
    minimumSpendUSD: 6000,
    pointsMultiplier: 2.0,
    color: '#302725',
    perks: [
      'Earn 2.0 points per $1 spent',
      'Private VIP Suite reservation at no additional charge',
      '20% privilege discount across all services & retail',
      'Dedicated personal concierge direct line',
      'Guaranteed appointment availability with 24h notice'
    ]
  }
];
