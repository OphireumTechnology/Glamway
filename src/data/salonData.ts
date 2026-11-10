import { SalonBranch, ServiceItem, BeautySpecialist, ProductItem, MembershipTier } from '../types';

export const GLAMWAY_LOGO = `${import.meta.env.BASE_URL}branding/glamway-official-logo.png`;
export const GLAMWAY_ICON = `${import.meta.env.BASE_URL}branding/glamway-icon.png`;
export const HERO_IMAGE = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85';
export const HAIR_IMAGE = 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85';
export const FACIAL_IMAGE = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85';
export const NAILS_IMAGE = 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85';

export const SALON_BRANCHES: SalonBranch[] = [
  {
    id: 'branch-nc-1',
    name: 'Branch 1 — The Glamway Flagship (Location Details Pending)',
    city: 'North Carolina',
    state: 'NC',
    zipCode: 'Pending Official Confirmation',
    district: 'North Carolina Metro Area',
    address: 'Official Location Address Pending — North Carolina, USA',
    phone: 'Official Phone Pending Confirmation',
    email: 'branch1@theglamway.com',
    operatingHours: 'Mon – Sat: 9:00 AM – 7:00 PM · Sun: 11:00 AM – 5:00 PM EST',
    amenities: [
      'Private Women-Only VIP Styling Suites',
      'Champagne & Herbal Tea Refreshment Bar',
      'Aromatherapy Hair Spa Basins',
      'Dedicated Valet & Concierge Reception',
      'High-Speed Wi-Fi & Work Lounge'
    ],
    treatmentRooms: 10,
    staffCount: 16,
    coordinates: { lat: 35.7796, lng: -78.6382 },
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    googleMapQuery: 'North Carolina USA',
    licenseNumber: 'NC-COSM-PENDING-01'
  },
  {
    id: 'branch-nc-2',
    name: 'Branch 2 — The Glamway Atelier (Location Details Pending)',
    city: 'North Carolina',
    state: 'NC',
    zipCode: 'Pending Official Confirmation',
    district: 'North Carolina Metro Area',
    address: 'Official Location Address Pending — North Carolina, USA',
    phone: 'Official Phone Pending Confirmation',
    email: 'branch2@theglamway.com',
    operatingHours: 'Mon – Sat: 9:00 AM – 7:00 PM · Sun: 11:00 AM – 5:00 PM EST',
    amenities: [
      'Private Bridal Dressing Suite',
      'Luxe 24K Gold Nail Cabanas',
      'Facial & Hydration Dermal Bar',
      'Reserved Guest Parking'
    ],
    treatmentRooms: 8,
    staffCount: 12,
    coordinates: { lat: 35.2271, lng: -80.8431 },
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
    googleMapQuery: 'North Carolina USA',
    licenseNumber: 'NC-COSM-PENDING-02'
  }
];

export const SALON_SERVICES: ServiceItem[] = [
  // 1. HAIR STUDIO
  {
    id: 'srv-balayage-couture',
    name: 'French Balayage & Glossing Ritual',
    category: 'hair',
    categoryLabel: 'Hair Studio',
    tagline: 'Hand-painted dimensional brilliance customized for women',
    description: 'Custom hand-painted French balayage using ammonia-free European pigments, followed by our signature hyaluronic acid gloss seal to achieve multidimensional reflections with seamless root growth.',
    durationMinutes: 180,
    priceUSD: 285,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    preparation: 'Arrive with dry, unwashed hair (1–2 days post-wash). Avoid clarifying treatments beforehand.',
    aftercare: 'Use sulfate-free color-safe cleansing elixirs; allow 48 hours before your first post-treatment wash.',
    popularAddOns: ['Olaplex Bond Multiplier Infusion (+$45)', 'Scalp Detox & Micro-Exfoliation (+$35)'],
    isFeatured: true
  },
  {
    id: 'srv-keratin-silk',
    name: 'Caviar Silk Keratin Infusion',
    category: 'hair',
    categoryLabel: 'Hair Studio',
    tagline: 'Formaldehyde-free smoothing elixir formulated for coastal & Southern humidity',
    description: 'Advanced amino-acid smoothing treatment enriched with wild caviar extracts that relaxes stubborn frizz and repels humidity while preserving natural volume and bounce.',
    durationMinutes: 150,
    priceUSD: 320,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
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
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    popularAddOns: ['Moroccan Argan Deep Mask (+$35)', 'Curling Iron Luxe Finish (+$20)'],
    isFeatured: true
  },
  {
    id: 'srv-hair-extensions',
    name: 'Seamless Remy Hair Extensions & Density',
    category: 'hair',
    categoryLabel: 'Hair Studio',
    tagline: 'Ultra-thin invisible tape & hand-tied weft extensions for natural thickness',
    description: '100% ethically sourced double-drawn Remy human hair color-matched seamlessly to your base. Adds cascading length, natural density, and dimension without tension.',
    durationMinutes: 120,
    priceUSD: 350,
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    popularAddOns: ['Custom Blended Tone Match (+$45)', 'Silk Finishing Wave (+$25)'],
    isFeatured: false
  },
  {
    id: 'srv-scalp-spa',
    name: 'Aromatherapy Scalp Detox & Hydro-Care',
    category: 'hair',
    categoryLabel: 'Hair Studio',
    tagline: 'Deep follicular cleansing, rosemary scalp stimulation, and steam infusion',
    description: 'Micro-exfoliating salicylic scrub for the scalp, warm Japanese hydro-mist circulation, tension-melting neck massage, and restorative keratin hair mask.',
    durationMinutes: 60,
    priceUSD: 110,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    popularAddOns: ['High-Frequency Follicle Stimulation (+$30)'],
    isFeatured: false
  },

  // 2. NAIL LOUNGE
  {
    id: 'srv-gold-couture-mani',
    name: 'Glamway 24K Gold Couture Manicure',
    category: 'nails',
    categoryLabel: 'Nail Lounge',
    tagline: 'Russian dry precision cuticle detailing with champagne gold micro-accents',
    description: 'Flawless dry e-file cuticle alignment, organic brown sugar hand polish, nourishing warm camellia oil soak, structured gel base, and delicate hand-placed 24K gold leaf accents.',
    durationMinutes: 75,
    priceUSD: 85,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
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
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    aftercare: 'Wear open-toed footwear if selecting classic lacquer instead of gel.',
    popularAddOns: ['Heel Collagen Cocoon (+$20)', 'Micro-French Tip Detailing (+$15)'],
    isFeatured: false
  },
  {
    id: 'srv-gel-architecture',
    name: 'Russian Structured Gel & Nude Glass Couture',
    category: 'nails',
    categoryLabel: 'Nail Lounge',
    tagline: 'Pristine apex architecture, micro-alignment, and diamond high-gloss finish',
    description: 'Reinforced apex structure that strengthens natural nails, accompanied by diamond dry cuticle grooming, custom nude pigment layering, and high-shine scratch-proof topcoat.',
    durationMinutes: 80,
    priceUSD: 90,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    popularAddOns: ['Chrome Glaze Effect (+$15)', 'Custom Minimalist Nail Art (+$25)'],
    isFeatured: false
  },

  // 3. FACIAL & SKINCARE
  {
    id: 'srv-hydra-radiance',
    name: 'Botanical Radiance Hydra-Infusion',
    category: 'facial',
    categoryLabel: 'Facial & Skincare',
    tagline: 'Non-invasive vortex extraction, deep hydration, and cryo-firming',
    description: 'Triple-phase dermal vortex cleansing, mild enzymatic fruit peeling, antioxidant serum infusion, lymphatic jade roller massage, and cooling collagen biocellulose mask.',
    durationMinutes: 75,
    priceUSD: 175,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    preparation: 'Discontinue retinol and chemical exfoliants 48 hours prior.',
    aftercare: 'Wear SPF 50 daily; avoid direct midday sunlight and saunas for 24 hours.',
    popularAddOns: ['LED Photon Collagen Rejuvenation (+$35)', 'Décolleté Firming Treatment (+$45)'],
    isFeatured: true
  },
  {
    id: 'srv-caviar-lift',
    name: 'Black Caviar & Peptide Youth Sculpt',
    category: 'facial',
    categoryLabel: 'Facial & Skincare',
    tagline: 'Deep contouring myofascial lift and cellular firmness therapy',
    description: 'Intense anti-aging ritual pairing French black caviar proteins with marine peptides. Includes buccal facial contouring massage and microcurrent skin toning.',
    durationMinutes: 90,
    priceUSD: 245,
    image: 'https://images.unsplash.com/photo-1512290900672-1f49615a9ff2?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    preparation: 'Recommended before galas and photography sessions; delivers instantaneous radiance.',
    aftercare: 'Drink plenty of water to enhance lymphatic drainage benefits.',
    popularAddOns: ['Eye Contour Brightener (+$30)'],
    isFeatured: false
  },

  // 4. LASHES & BROWS
  {
    id: 'srv-silk-lash-couture',
    name: 'Cashmere Feather Lash Extension',
    category: 'lashes-brows',
    categoryLabel: 'Lashes & Brows',
    tagline: 'Ultra-lightweight Japanese cashmere lashes customized to eye architecture',
    description: 'Single-strand and hybrid feather-light lashes applied individually with hypoallergenic medical-grade adhesive for fluttery, weightless elegance.',
    durationMinutes: 105,
    priceUSD: 160,
    image: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    preparation: 'Arrive with clean, makeup-free eyes; remove contact lenses prior to application.',
    aftercare: 'Keep lashes dry for 24 hours; avoid oil-based makeup cleansers.',
    popularAddOns: ['Keratin Lash Strengthener (+$20)', 'Brow Shaping & Tint (+$35)'],
    isFeatured: true
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
    image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    preparation: 'Avoid brow waxing or threading for 1 week prior.',
    aftercare: 'Apply brow conditioner daily; avoid water exposure for 24 hours.',
    popularAddOns: ['Under-Eye Hydrating Gel Pads (+$15)'],
    isFeatured: false
  },

  // 5. MAKEUP STUDIO
  {
    id: 'srv-red-carpet-makeup',
    name: 'Red Carpet Gala & Evening Glamour',
    category: 'makeup',
    categoryLabel: 'Makeup Studio',
    tagline: 'Long-wearing HD radiance for weddings, galas, and photographic portraits',
    description: 'Pre-makeup dermal hydration prep, bespoke airbrush or luxury cream foundation, customized lash strip application, and humidity-resistant setting finish.',
    durationMinutes: 75,
    priceUSD: 135,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    preparation: 'Wear a button-down or robe to prevent contact with finished makeup.',
    aftercare: 'Includes a complimentary touch-up kit with blotting sheets and lip sample.',
    popularAddOns: ['Body Shimmer Radiance Glow (+$25)'],
    isFeatured: true
  },

  // 6. SPA & WELLNESS
  {
    id: 'srv-aroma-stone-massage',
    name: 'Warm Basalt & Sweet Jasmine Massage',
    category: 'body-wellness',
    categoryLabel: 'Spa & Wellness',
    tagline: 'Volcanic basalt stones infused with organic botanical oils in private suite',
    description: 'Deep relaxation ritual using heated volcanic basalt stones to melt muscular tension, paired with cold-pressed sweet almond and jasmine blossom essential oils.',
    durationMinutes: 90,
    priceUSD: 145,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    preparation: 'Avoid heavy meals 1 hour prior to appointment.',
    aftercare: 'Stay well-hydrated post-session to support tension release.',
    popularAddOns: ['Botanical Sea Salt Polish (+$45)', 'Foot Reflexology Accent (+$30)'],
    isFeatured: false
  },

  // 7. BRIDAL BEAUTY
  {
    id: 'srv-bridal-hair-veil',
    name: 'Couture Bridal Hairstyle & Veil Placement',
    category: 'bridal',
    categoryLabel: 'Bridal Beauty',
    tagline: 'Intricate romantic updos, Hollywood waves, and secure veil anchoring',
    description: 'Master wedding styling incorporating hair prep, dimensional curls or chignon architecture, accessory integration, and 12-hour high-hold humidity shield.',
    durationMinutes: 90,
    priceUSD: 195,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    preparation: 'Bring your veil, headpiece, or hair accessories to the appointment.',
    popularAddOns: ['Hair Extension Insertion (+$50)', 'Bridal Preview Trial Session (+$120)'],
    isFeatured: true
  },
  {
    id: 'srv-bridal-glam-suite',
    name: 'Complete Bridal Radiance Hair & Makeup',
    category: 'bridal',
    categoryLabel: 'Bridal Beauty',
    tagline: 'The complete private bridal suite experience for the unforgettable day',
    description: 'Full bridal glow prep: dermal micro-infusion, flawless photography-grade makeup, precision lash application, couture hairstyle, and bridal touch-up kit.',
    durationMinutes: 150,
    priceUSD: 310,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    popularAddOns: ['Mother-of-the-Bride Styling (+$140)', 'Champagne Service Upgrade (+$45)'],
    isFeatured: true
  },

  // 8. BEAUTY PACKAGES
  {
    id: 'srv-grand-empress-day',
    name: 'The Glamway Empress Day Retreat',
    category: 'packages',
    categoryLabel: 'Beauty Packages',
    tagline: 'A comprehensive 5-hour private suite transformation and wellness journey for women',
    description: 'Our most celebrated VIP journey. Includes: Botanical Hydra-Infusion facial, Caviar Keratin hair ritual, 24K Gold manicure & pedicure, warm basalt massage, and chilled champagne or artisanal tea served in your private suite.',
    durationMinutes: 300,
    priceUSD: 595,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    preparation: 'A private suite is reserved exclusively for you for the full day.',
    aftercare: 'Includes custom home-care travel kit and personal stylist concierge direct line.',
    popularAddOns: ['Private Chauffeur Transportation (+$95)'],
    isFeatured: true
  },
  {
    id: 'srv-bridal-party-suite',
    name: 'Private Suite Bridal Party Celebration',
    category: 'packages',
    categoryLabel: 'Beauty Packages',
    tagline: 'Dedicated suite reservation for bride & bridesmaids with champagne service',
    description: 'Exclusive reservation of our executive beauty suite for groups of 4 to 8. Includes simultaneous blowout bars, couture manicures, mimosa service, and charcuterie board.',
    durationMinutes: 240,
    priceUSD: 850,
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-nc-1', 'branch-nc-2'],
    popularAddOns: ['Photography Retouching Studio Prep (+$150)'],
    isFeatured: false
  }
];

export const BEAUTY_SPECIALISTS: BeautySpecialist[] = [
  {
    id: 'spec-camille',
    name: 'Camille De La Rosa',
    role: 'Creative Hair Director & Balayage Master',
    specialties: ['French Balayage', 'Couture Cuts', 'Color Transformation'],
    branchId: 'branch-nc-1',
    experienceYears: 12,
    rating: 4.98,
    reviewsCount: 342,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Trained in Paris and New York, Camille leads The Glamway’s hair artistry, styling for fashion week editorials and exclusive bridal events.',
    licenseId: 'NC-COSM-49201'
  },
  {
    id: 'spec-sophia',
    name: 'Sophia Isabel Reyes',
    role: 'Lead Dermal Aesthetician',
    specialties: ['Hydra-Infusion', 'Facial Sculpting', 'Sensitive Barrier Therapy'],
    branchId: 'branch-nc-1',
    experienceYears: 9,
    rating: 4.95,
    reviewsCount: 280,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Licensed esthetician specializing in non-invasive glow rituals and skin barrier recovery.',
    licenseId: 'NC-EST-33109'
  },
  {
    id: 'spec-elena',
    name: 'Elena Santos-Villar',
    role: 'Master Nail Artist & Sculptor',
    specialties: ['Russian E-File', '24K Gold Nail Art', 'Structured Gel'],
    branchId: 'branch-nc-2',
    experienceYears: 8,
    rating: 4.97,
    reviewsCount: 215,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Renowned for meticulous cuticle architecture, 24K gold foil embellishments, and long-lasting structured gel.',
    licenseId: 'NC-NT-55204'
  },
  {
    id: 'spec-claire',
    name: 'Claire Chen-Montenegro',
    role: 'Senior Lash & Brow Artist',
    specialties: ['Cashmere Lashes', '3D Lamination', 'Eye Architecture'],
    branchId: 'branch-nc-2',
    experienceYears: 7,
    rating: 4.94,
    reviewsCount: 198,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Master certified in feather-weight lash extensions designed for natural eye contouring.',
    licenseId: 'NC-EST-41002'
  }
];

export const BOUTIQUE_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-caviar-serum',
    name: 'The Glamway L’Élixir D’Or Caviar Serum',
    brand: 'The Glamway Haute Beauté Lab',
    category: 'skincare',
    priceUSD: 145,
    volume: '1.7 fl oz / 50 ml',
    description: 'Concentrated peptide and black caviar essence that stimulates cellular collagen and imparts a glassy, luminous complexion.',
    keyBenefits: ['Deep dermal hydration', 'Fine-line smoothing', 'Antioxidant barrier protection'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    rating: 4.9
  },
  {
    id: 'prod-argan-gloss',
    name: 'Silk Radiance Botanical Hair Oil',
    brand: 'The Glamway Haute Beauté Lab',
    category: 'haircare',
    priceUSD: 68,
    volume: '3.4 fl oz / 100 ml',
    description: 'Weightless finishing gloss formulated with cold-pressed Moroccan argan oil, camellia blossom, and UV thermal shields.',
    keyBenefits: ['Humidity frizz defense up to 96h', 'Glass-like sheen without weight', 'Heat protection up to 450°F'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1608248597359-bb01d5118742?auto=format&fit=crop&w=800&q=80',
    rating: 4.95
  },
  {
    id: 'prod-cuticle-elixir',
    name: 'Rose & 24K Gold Botanical Cuticle Elixir',
    brand: 'The Glamway Haute Beauté Lab',
    category: 'nailcare',
    priceUSD: 42,
    volume: '1.0 fl oz / 30 ml',
    description: 'Infused with real 24-karat gold flakes and organic damask rose oil to nourish cuticles and fortify nail bed flexibility.',
    keyBenefits: ['Prevents hangnails', 'Instant cuticle softening', 'Subtle rose fragrance'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    rating: 4.88
  },
  {
    id: 'prod-silk-pillowcase',
    name: 'Pure Mulberry Silk Beauty Sleep Set (Blush & Champagne)',
    brand: 'The Glamway Maison',
    category: 'accessories',
    priceUSD: 85,
    volume: 'Queen / King 22 Momme + Silk Eye Mask',
    description: 'Certified 100% 22 Momme grade-6A mulberry silk to prevent hair friction breakage, facial sleep creases, and skin moisture loss.',
    keyBenefits: ['Hypoallergenic & frictionless', 'Maintains skin hydration', 'Gentle on eyelash extensions'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    rating: 5.0
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'tier-essential',
    name: 'Beauty Essential',
    minimumSpendUSD: 0,
    pointsMultiplier: 1.0,
    color: '#A98F86',
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
    color: '#8E4B63',
    perks: [
      'Earn 2.0 points per $1 spent',
      'Private VIP Suite reservation at no additional charge',
      '20% privilege discount across all services & retail',
      'Dedicated personal concierge direct line',
      'Guaranteed appointment availability with 24h notice'
    ]
  }
];
