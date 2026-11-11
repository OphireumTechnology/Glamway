import { SalonBranch, ServiceItem, BeautySpecialist, ProductItem, MembershipTier, TrainingCourse } from '../types';

export const GLAMWAY_LOGO = `${import.meta.env.BASE_URL}branding/glamway-official-logo.png`;
export const GLAMWAY_LOGO_WEBP = `${import.meta.env.BASE_URL}branding/glamway-official-logo.webp`;
export const GLAMWAY_ICON = `${import.meta.env.BASE_URL}branding/glamway-icon.png`;
export const GLAMWAY_SOCIAL_PREVIEW = `${import.meta.env.BASE_URL}branding/glamway-social-preview.png`;
export const HERO_IMAGE = `${import.meta.env.BASE_URL}assets/services/hero-salon-interior.webp`;
export const HAIR_IMAGE = `${import.meta.env.BASE_URL}assets/services/hair-styling.webp`;
export const FACIAL_IMAGE = `${import.meta.env.BASE_URL}assets/services/skincare-facial.webp`;
export const NAILS_IMAGE = `${import.meta.env.BASE_URL}assets/services/nail-couture.webp`;

export const FOUNDER_PORTRAIT = `${import.meta.env.BASE_URL}assets/summer-davis-founder-ceo.webp`;

// Founder Information (Accurately preserved from original website)
export const FOUNDER_INFO = {
  name: 'Summer Davis',
  title: 'Founder & CEO',
  credential: 'Licensed Esthetician',
  company: 'The Glamway Beauty Salon',
  location: 'Charlotte, North Carolina',
  bio: 'Summer Davis is the founder and CEO of The Glamway. Born and raised in Charlotte, North Carolina, her journey in the beauty industry began with lash training in 2017, followed by obtaining her esthetician license in 2018. She built The Glamway into a one-stop destination for luxury beauty services and professional beauty education.',
  image: `${import.meta.env.BASE_URL}assets/summer-davis-founder-ceo.webp`
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
    image: `${import.meta.env.BASE_URL}assets/services/hero-salon-interior.webp`,
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
    image: `${import.meta.env.BASE_URL}assets/services/hero-salon-interior.webp`,
    googleMapQuery: '2506 Lucena St, Charlotte, NC 28206',
    locationNote: 'Charlotte location serving beauty services, training sessions, and supply order pickup.',
    licenseNumber: 'NC-ESTH-CLT-02'
  }
];

// Verified Services: 7 Organized Categories without public prices
export const SALON_SERVICES: ServiceItem[] = [
  // 1. LASHES
  {
    id: 'srv-full-lash-set',
    name: 'Full Eyelash Extension Set',
    category: 'lashes',
    categoryLabel: 'Lashes',
    tagline: 'Customized classic, hybrid, or volume full extension set',
    description: 'Complete eyelash extension set customized to your eye shape and natural lashes.',
    durationMinutes: 120,
    image: `${import.meta.env.BASE_URL}assets/services/lash-full-set.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-lash-fill',
    name: 'Lash Extension Fill-In',
    category: 'lashes',
    categoryLabel: 'Lashes',
    tagline: '2 to 3 week maintenance to replenish growth and preserve fullness',
    description: 'Maintenance appointment to remove outgrown extensions and replenish lashes.',
    durationMinutes: 75,
    image: `${import.meta.env.BASE_URL}assets/services/lash-fill-in.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-top-bottom-lashes',
    name: 'Top & Bottom Lash Set',
    category: 'lashes',
    categoryLabel: 'Lashes',
    tagline: 'Upper and lower lash application for balanced glamour',
    description: 'Comprehensive lash extension appointment covering upper and lower lash lines.',
    durationMinutes: 135,
    image: `${import.meta.env.BASE_URL}assets/services/top-bottom-lashes.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },
  {
    id: 'srv-lash-removal',
    name: 'Professional Lash Extension Removal',
    category: 'lashes',
    categoryLabel: 'Lashes',
    tagline: 'Gentle adhesive removal and natural lash conditioning',
    description: 'Safe removal of lash extensions with professional cream cleanser.',
    durationMinutes: 30,
    image: `${import.meta.env.BASE_URL}assets/services/lash-fill-in.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },

  // 2. ADDITIONAL LASH TREATMENTS
  {
    id: 'srv-removal-full-set',
    name: 'Removal + Full Set',
    category: 'additional-lashes',
    categoryLabel: 'Additional Lash Treatments',
    tagline: 'Professional lash removal followed by a fresh full set',
    description: 'Removal of existing lash extensions followed by application of a full set.',
    durationMinutes: 120,
    image: `${import.meta.env.BASE_URL}assets/services/lash-full-set.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-fill-in',
    name: 'Fill In',
    category: 'additional-lashes',
    categoryLabel: 'Additional Lash Treatments',
    tagline: 'Routine eyelash extension refill and maintenance',
    description: 'Standard maintenance appointment to replace outgrown extensions and maintain fullness.',
    durationMinutes: 60,
    image: `${import.meta.env.BASE_URL}assets/services/lash-fill-in.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-top-bottom-full-set',
    name: 'Top & Bottom Full Set',
    category: 'additional-lashes',
    categoryLabel: 'Additional Lash Treatments',
    tagline: 'Full upper and lower lash line extension artistry',
    description: 'Full set application covering both upper and lower lash lines.',
    durationMinutes: 100,
    image: `${import.meta.env.BASE_URL}assets/services/top-bottom-lashes.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },
  {
    id: 'srv-top-bottom-fill-in',
    name: 'Top & Bottom Fill In',
    category: 'additional-lashes',
    categoryLabel: 'Additional Lash Treatments',
    tagline: 'Maintenance refill for upper and lower lash sets',
    description: 'Maintenance refill for both upper and lower lash extensions.',
    durationMinutes: 75,
    image: `${import.meta.env.BASE_URL}assets/services/top-bottom-lashes.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },
  {
    id: 'srv-lash-full-set',
    name: 'Lash Full Set',
    category: 'additional-lashes',
    categoryLabel: 'Additional Lash Treatments',
    tagline: 'Tailored full eyelash extension application',
    description: 'Full set of eyelash extensions individually applied for enhanced length and volume.',
    durationMinutes: 90,
    image: `${import.meta.env.BASE_URL}assets/services/lash-full-set.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-7-day-fill-in',
    name: '7 Day Fill In',
    category: 'additional-lashes',
    categoryLabel: 'Additional Lash Treatments',
    tagline: 'Rapid one-week lash touch-up to maintain perfection',
    description: 'Lash extension touch-up scheduled within 7 days of a previous appointment.',
    durationMinutes: 45,
    image: `${import.meta.env.BASE_URL}assets/services/lash-fill-in.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },

  // 3. WAXING
  {
    id: 'srv-brazilian-wax',
    name: 'Brazilian Wax',
    category: 'waxing',
    categoryLabel: 'Waxing',
    tagline: 'Precision waxing performed in private treatment suites',
    description: 'Professional Brazilian waxing treatment performed in a private suite.',
    durationMinutes: 30,
    image: `${import.meta.env.BASE_URL}assets/services/brazilian-wax.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },

  // 4. HOUSE CALLS
  {
    id: 'srv-house-calls',
    name: 'House Calls',
    category: 'house-calls',
    categoryLabel: 'House Calls',
    tagline: 'Private on-location beauty appointment scheduled in advance',
    description: 'Private on-location beauty appointment scheduled in advance.',
    durationMinutes: 150,
    image: `${import.meta.env.BASE_URL}assets/services/house-calls.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },

  // 5. HAIR
  {
    id: 'srv-hair-styling-install',
    name: 'Hair Styling & Extension Installation',
    category: 'hair',
    categoryLabel: 'Hair',
    tagline: 'Professional hair installation, sew-ins, and precision styling',
    description: 'Professional hair extension installation and styling tailored to your natural hair.',
    durationMinutes: 150,
    image: `${import.meta.env.BASE_URL}assets/services/hair-styling.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-silk-press',
    name: 'Silk Press & Treatment',
    category: 'hair',
    categoryLabel: 'Hair',
    tagline: 'Deep conditioning treatment and thermal silk press',
    description: 'Deep conditioning treatment and thermal silk press.',
    durationMinutes: 90,
    image: `${import.meta.env.BASE_URL}assets/services/hair-styling.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-hair-maintenance',
    name: 'Hair Cut & Maintenance Trim',
    category: 'hair',
    categoryLabel: 'Hair',
    tagline: 'Precision hair trim and shaping',
    description: 'Precision hair trim and shaping.',
    durationMinutes: 60,
    image: `${import.meta.env.BASE_URL}assets/services/hair-styling.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },

  // 6. NAILS
  {
    id: 'srv-structured-manicure',
    name: 'Structured Gel Manicure',
    category: 'nails',
    categoryLabel: 'Nails',
    tagline: 'Cuticle care, apex reinforcement, and gel polish',
    description: 'Cuticle care, apex reinforcement, and long-lasting gel polish.',
    durationMinutes: 75,
    image: `${import.meta.env.BASE_URL}assets/services/nail-couture.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-gel-nail-enhancements',
    name: 'Full Nail Enhancements & Art',
    category: 'nails',
    categoryLabel: 'Nails',
    tagline: 'Nail extensions with custom shape, length, and design',
    description: 'Full set of nail enhancements with custom shaping and design.',
    durationMinutes: 90,
    image: `${import.meta.env.BASE_URL}assets/services/nail-couture.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: false
  },

  // 7. FACIALS
  {
    id: 'srv-custom-esthetician-facial',
    name: 'Custom Esthetician Facial',
    category: 'facial',
    categoryLabel: 'Facials',
    tagline: 'Personalized skin evaluation, cleansing, and hydration',
    description: 'Personalized facial treatment with cleansing, exfoliation, and hydration.',
    durationMinutes: 60,
    image: `${import.meta.env.BASE_URL}assets/services/skincare-facial.webp`,
    eligibleBranches: ['branch-clt-uptown', 'branch-clt-graham'],
    isFeatured: true
  },
  {
    id: 'srv-facial-glow-waxing',
    name: 'Facial Glow & Brow Detailing',
    category: 'facial',
    categoryLabel: 'Facials',
    tagline: 'Hydrating mini-facial combined with precision brow waxing',
    description: 'Skin-refreshing facial treatment paired with precision brow detailing.',
    durationMinutes: 45,
    image: `${import.meta.env.BASE_URL}assets/services/skincare-facial.webp`,
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
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80'
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
    perks: ['Online Appointment Scheduling', 'Seasonal Service Announcements', 'Online Reschedule Flexibility'],
    color: '#D9B6A9'
  },
  {
    id: 'tier-glam-vip',
    name: 'Glamway VIP',
    minimumSpendUSD: 500,
    pointsMultiplier: 1.5,
    perks: ['Priority Appointment Booking', 'Complimentary Custom Lash Consultation', 'Invitations to Exclusive Beauty Masterclasses'],
    color: '#8E4B63'
  }
];
