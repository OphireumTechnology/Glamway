import { SalonBranch, ServiceItem, BeautySpecialist, ProductItem, MembershipTier, TrainingCourse } from '../types';

export const GLAMWAY_LOGO = `${import.meta.env.BASE_URL}branding/glamway-official-logo.png`;
export const GLAMWAY_ICON = `${import.meta.env.BASE_URL}branding/glamway-icon.png`;
export const HERO_IMAGE = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85';
export const HAIR_IMAGE = 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85';
export const FACIAL_IMAGE = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85';
export const NAILS_IMAGE = 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85';

// Founder Information (Accurately preserved from original website)
export const FOUNDER_INFO = {
  name: 'Summer Davis',
  title: 'Founder & Licensed Esthetician',
  location: 'Charlotte, North Carolina',
  bio: 'Summer Davis is the founder of The Glamway. Born and raised in Charlotte, North Carolina, her journey in the beauty industry began with lash training in 2017, followed by obtaining her esthetician license in 2018. She built The Glamway into a one-stop destination for beauty services, professional lash supplies, and beauty education.',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85'
};

// Verified Locations from theglamwayclt.com/locations
export const SALON_BRANCHES: SalonBranch[] = [
  {
    id: 'branch-clt-uptown',
    name: 'The Glamway — Uptown Charlotte',
    city: 'Charlotte',
    state: 'NC',
    zipCode: '28202',
    district: 'Uptown Charlotte',
    address: '428 E. Fourth St., Charlotte, NC 28202',
    phone: '(704) 756-2253',
    email: 'theglamwayllc@icloud.com',
    operatingHours: 'Appointments Available Mon – Sat (Booking Required)',
    amenities: [
      'Private Eyelash Extension Suites',
      'Facial & Esthetics Treatment Rooms',
      'Lash Supply & Product Retail Bar',
      'Client Parking Available'
    ],
    treatmentRooms: 6,
    staffCount: 8,
    coordinates: { lat: 35.2238, lng: -80.8396 },
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    googleMapQuery: '428 E Fourth St, Charlotte, NC 28202',
    locationNote: 'Located in Uptown Charlotte. Appointments must be reserved online in advance.',
    licenseNumber: 'NC-ESTH-CLT-01'
  },
  {
    id: 'branch-clt-graham',
    name: 'The Glamway — Graham',
    city: 'Charlotte',
    state: 'NC',
    zipCode: '28206',
    district: 'North Charlotte',
    address: '2506 Lucena St., Charlotte, NC 28206',
    phone: '(704) 756-2253',
    email: 'theglamwayllc@icloud.com',
    operatingHours: 'Appointments Available Mon – Sat (Booking Required)',
    amenities: [
      'Lash Tech Training Academy',
      'Hair & Nail Beauty Suites',
      'Wholesale & Retail Supply Pickup',
      'Dedicated Guest Parking'
    ],
    treatmentRooms: 6,
    staffCount: 6,
    coordinates: { lat: 35.2483, lng: -80.8329 },
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
    googleMapQuery: '2506 Lucena St, Charlotte, NC 28206',
    locationNote: 'Charlotte location serving beauty services, training sessions, and supply order pickup.',
    licenseNumber: 'NC-ESTH-CLT-02'
  }
];

// Verified Services: strictly the 4 verified categories (Lashes, Hair, Nails, Facials)
export const SALON_SERVICES: ServiceItem[] = [
  // 1. LASHES
  {
    id: 'srv-full-lash-set',
    name: 'Full Eyelash Extension Set',
    category: 'lashes',
    categoryLabel: 'Lashes',
    tagline: 'Customized classic, hybrid, or volume full extension set',
    description: 'Complete lash extension set individually tailored to your eye shape and natural lash strength for everyday elegance or dramatic volume.',
    durationMinutes: 120,
    priceUSD: 160,
    image: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    preparation: 'Arrive with clean, makeup-free eye area. Avoid caffeine prior to your appointment.',
    aftercare: 'Keep lashes dry for 24 hours. Brush gently daily with clean mascara wand.',
    isFeatured: true
  },
  {
    id: 'srv-lash-fill',
    name: 'Lash Extension Fill-In',
    category: 'lashes',
    categoryLabel: 'Lashes',
    tagline: '2 to 3 week maintenance to replenish growth and preserve fullness',
    description: 'Maintenance appointment to remove outgrown extensions and place fresh lashes to restore your set to full density.',
    durationMinutes: 75,
    priceUSD: 85,
    image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    preparation: 'Clients should have at least 40% of their extensions remaining for a fill.',
    aftercare: 'Cleanse lashes with oil-free lash foam cleanser.',
    isFeatured: true
  },
  {
    id: 'srv-top-bottom-lashes',
    name: 'Top & Bottom Lash Set',
    category: 'lashes',
    categoryLabel: 'Lashes',
    tagline: 'Full upper set with delicate lower lash application for balanced glamour',
    description: 'Comprehensive lash extension appointment covering both upper and lower lash lines for an ultra-glamorous, open-eyed look.',
    durationMinutes: 135,
    priceUSD: 195,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },
  {
    id: 'srv-lash-removal',
    name: 'Professional Lash Extension Removal',
    category: 'lashes',
    categoryLabel: 'Lashes',
    tagline: 'Gentle, non-damaging adhesive breakdown and conditioning',
    description: 'Safe in-salon removal of lash extensions using professional cream remover that dissolves adhesive without damaging natural lashes.',
    durationMinutes: 30,
    priceUSD: 35,
    image: 'https://images.unsplash.com/photo-1512290900672-1f49615a9ff2?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },

  // 2. HAIR
  {
    id: 'srv-hair-styling-install',
    name: 'Hair Styling & Extension Installation',
    category: 'hair',
    categoryLabel: 'Hair',
    tagline: 'Professional hair installation, sew-ins, and precision styling',
    description: 'Expert hair extension installation and styling tailored to your natural hair, ensuring seamless blending, security, and hair health.',
    durationMinutes: 150,
    priceUSD: 185,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    preparation: 'Hair should be washed and detangled prior to installation.',
    isFeatured: true
  },
  {
    id: 'srv-silk-press',
    name: 'Silk Press & Treatment',
    category: 'hair',
    categoryLabel: 'Hair',
    tagline: 'Deep conditioning, thermal heat protectant, and sleek silk press',
    description: 'Clarifying wash, hydrating deep condition, blow dry, and precision thermal press for lightweight, silky movement without chemical alteration.',
    durationMinutes: 90,
    priceUSD: 95,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-hair-maintenance',
    name: 'Hair Cut & Maintenance Trim',
    category: 'hair',
    categoryLabel: 'Hair',
    tagline: 'Split-end removal, shaping, and healthy growth maintenance',
    description: 'Cleanse, conditioning, precision trim to eliminate damaged ends, and light styling.',
    durationMinutes: 60,
    priceUSD: 65,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },

  // 3. NAILS
  {
    id: 'srv-structured-manicure',
    name: 'Structured Gel Manicure',
    category: 'nails',
    categoryLabel: 'Nails',
    tagline: 'Cuticle care, apex reinforcement, and long-lasting gel finish',
    description: 'Detailed dry manicure cuticle clean-up, nail shaping, builder gel overlay to strengthen natural nails, and high-shine gel polish.',
    durationMinutes: 75,
    priceUSD: 75,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-gel-nail-enhancements',
    name: 'Full Nail Enhancements & Art',
    category: 'nails',
    categoryLabel: 'Nails',
    tagline: 'Nail extensions with custom shape, length, and design',
    description: 'Full set of nail enhancements with custom shaping (almond, square, coffin), reinforced durability, and gel color finish.',
    durationMinutes: 90,
    priceUSD: 85,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },

  // 4. FACIALS
  {
    id: 'srv-custom-esthetician-facial',
    name: 'Custom Esthetician Facial',
    category: 'facial',
    categoryLabel: 'Facials',
    tagline: 'Personalized skin evaluation, deep cleansing, exfoliation, and hydration',
    description: 'Comprehensive facial treatment led by licensed estheticians. Includes skin analysis, double cleanse, enzyme exfoliation, pore clearing, targeted mask, and protective hydration.',
    durationMinutes: 60,
    priceUSD: 110,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    preparation: 'Discontinue retinol and chemical exfoliants 48 hours prior.',
    aftercare: 'Wear sunscreen daily; avoid heavy sun exposure and makeup for 24 hours.',
    isFeatured: true
  },
  {
    id: 'srv-facial-glow-waxing',
    name: 'Facial Glow & Brow Detailing',
    category: 'facial',
    categoryLabel: 'Facials',
    tagline: 'Hydrating mini-facial combined with precision brow waxing',
    description: 'Skin-refreshing cleanse and glow serum application paired with gentle brow shaping and facial waxing for a clean, luminous complexion.',
    durationMinutes: 45,
    priceUSD: 65,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=85',
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  }
];

// Verified Founder profile — Summer Davis
export const BEAUTY_SPECIALISTS: BeautySpecialist[] = [
  {
    id: 'spec-summer-davis',
    name: 'Summer Davis',
    role: 'Founder & Licensed Esthetician',
    specialties: ['Lashes', 'Esthetics', 'Lash Tech Training'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    bio: 'Founder of The Glamway. Began beauty career with lash training in 2017, followed by obtaining her esthetician license in 2018 in Charlotte, NC.',
    licenseId: 'NC-ESTH-2018',
    experienceYears: 7,
    rating: 5.0,
    reviewsCount: 150
  }
];

// Verified Products from theglamwayclt.com/shop
// Categories strictly: Lash Supplies, Lash Trays, Shop Hair, Best Sellers, Wholesale
export const SALON_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-003-glue',
    name: '0.03 Second Lash Adhesive',
    brand: 'The Glamway',
    category: 'lash-supplies',
    priceUSD: 25.00,
    specification: 'Ultra-fast drying professional adhesive',
    description: 'Professional grade eyelash extension glue with rapid 0.03-second dry time, formulated for experienced lash technicians seeking maximum retention.',
    keyBenefits: ['0.03 Second Dry Time', 'Maximum Retention Formula', 'Professional Lash Tech Use'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-05-glue',
    name: '0.5 Second Lash Adhesive',
    brand: 'The Glamway',
    category: 'lash-supplies',
    priceUSD: 25.00,
    specification: 'Smooth bonding professional adhesive',
    description: 'High-performance eyelash adhesive with a reliable 0.5-second setting time. Ideal for classic, hybrid, and volume lash applications.',
    keyBenefits: ['0.5 Second Dry Time', 'Long-Lasting Hold', 'Smooth Application'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-standard-trays',
    name: 'Standard Lash Trays',
    brand: 'The Glamway',
    category: 'lash-trays',
    priceUSD: 10.00,
    specification: 'Single length & mixed lash trays',
    description: 'High-quality synthetic mink lash trays with deep black finish and easy-peel foil strips for effortless pickup.',
    keyBenefits: ['Deep Matte Black', 'Easy Foil Peel Strips', 'Consistent Curl Hold'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-xl-trays',
    name: 'XL Lash Trays',
    brand: 'The Glamway',
    category: 'lash-trays',
    priceUSD: 15.00,
    specification: 'Extra volume capacity trays',
    description: 'Expanded capacity lash trays providing additional rows for high-volume lash artists, reducing the need for constant reordering.',
    keyBenefits: ['Extended Line Count', 'Soft Lightweight Fibers', 'Best-Seller Favorite'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1512290900672-1f49615a9ff2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-classic-c-cc-d',
    name: 'Classic Lash Trays (C, CC, & D Curls)',
    brand: 'The Glamway',
    category: 'lash-trays',
    priceUSD: 15.00,
    specification: 'Available in C, CC, and D curls',
    description: 'Premium individual lash extension trays in versatile C, CC, and D curls to create customized client eye maps.',
    keyBenefits: ['Multiple Curl Options', 'Resistant to Heat & Humidity', 'Natural Soft Texture'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-diy-lash-kit',
    name: 'DIY Lash Kit',
    brand: 'The Glamway',
    category: 'lash-supplies',
    priceUSD: 20.00,
    specification: 'At-home cluster lash application kit',
    description: 'Complete DIY lash kit containing pre-cut lash segments, gentle bonding adhesive, and applicator tweezers for at-home wear.',
    keyBenefits: ['Beginner-Friendly', 'Includes Bond & Applicator', 'Multi-Day Wear'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-glue-rings',
    name: 'Professional Glue Rings',
    brand: 'The Glamway',
    category: 'lash-supplies',
    priceUSD: 5.00,
    specification: 'Pack of ergonomic disposable glue rings',
    description: 'Disposable lash artist glue rings designed to keep adhesive close at hand during application, speeding up appointment workflow.',
    keyBenefits: ['Convenient Workflow', 'Disposable & Sanitary', 'Universal Finger Fit'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-mascara-wands',
    name: 'Disposable Mascara Wands',
    brand: 'The Glamway',
    category: 'lash-supplies',
    priceUSD: 5.00,
    specification: 'Pack of spoolie brushes for lash care',
    description: 'Sanitary spoolie brushes essential for grooming lash extensions before, during, and after service appointments.',
    keyBenefits: ['Gentle Bristles', 'Client Take-Home Care', 'Sanitary Single-Use'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prod-wholesale-bundle',
    name: 'Wholesale Lash Supply Pack',
    brand: 'The Glamway',
    category: 'wholesale',
    priceUSD: 150.00,
    specification: 'Bulk supplies for salons & independent lash artists',
    description: 'Wholesale inventory package featuring mixed lash trays, professional adhesives, glue rings, and preparation supplies at studio rates.',
    keyBenefits: ['Bulk Studio Pricing', 'Core Best Sellers Included', 'Fast Local NC Fulfillment'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  }
];

export const BOUTIQUE_PRODUCTS = SALON_PRODUCTS;

// Verified Beauty Education / Courses from theglamwayclt.com
export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'course-beginner-lash',
    title: 'Beginner Lash Tech Course',
    durationHours: 4,
    priceUSD: 650,
    targetAudience: 'Aspiring lash technicians and beauty entrepreneurs',
    description: 'Hands-on beginner lash training covering sanitation fundamentals, natural lash health, classic lash application, isolation techniques, and business setup.',
    curriculum: [
      'Sanitation, Hygiene & Client Safety',
      'Eye Anatomy & Lash Growth Cycles',
      'Proper Adhesive Chemistry & Retention',
      'Step-by-Step Isolation & Classic Placement',
      'Lash Mapping & Styling Consultation',
      'Client Aftercare & Removal Techniques'
    ],
    image: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'course-advanced-volume',
    title: 'Advanced Volume Lashes Course',
    durationHours: 2,
    priceUSD: 300,
    targetAudience: 'Practicing lash artists looking to master volume fan creation',
    description: 'Intensive course focused on manual volume fan creation, weight-to-diameter balance, hybrid and mega-volume techniques, and retention optimization.',
    curriculum: [
      'Manual Fan Creation Techniques',
      'Weight & Diameter Calculation for Natural Lash Safety',
      'Fast Pickup & Seamless Base Attachment',
      'Mega Volume & Hybrid Set Customization',
      'Speed Improvement & Ergonomics'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85'
  }
];

// Loyalty program
export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'tier-glam-guest',
    name: 'Glam Guest',
    minimumSpendUSD: 0,
    pointsMultiplier: 1,
    perks: ['Online Appointment Scheduling', 'Product Drop Notifications'],
    color: '#D9B6A9'
  },
  {
    id: 'tier-glam-vip',
    name: 'Glamway VIP',
    minimumSpendUSD: 500,
    pointsMultiplier: 1.5,
    perks: ['Priority Booking Access', 'Supply Store Privilege Discounts', 'Invitations to Training Workshops'],
    color: '#8E4B63'
  }
];
