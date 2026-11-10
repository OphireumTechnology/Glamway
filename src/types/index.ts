export type ServiceCategory = 
  | 'hair'
  | 'nails'
  | 'facial'
  | 'lashes-brows'
  | 'makeup'
  | 'body-wellness'
  | 'vip-packages';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  durationMinutes: number;
  priceUSD: number;
  image: string;
  eligibleBranches: string[];
  preparation?: string;
  aftercare?: string;
  popularAddOns?: string[];
  isFeatured?: boolean;
}

export interface SalonBranch {
  id: string;
  name: string;
  city: string;
  state: 'SC';
  zipCode: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  operatingHours: string;
  amenities: string[];
  treatmentRooms: number;
  staffCount: number;
  coordinates: { lat: number; lng: number };
  image: string;
  googleMapQuery: string;
  licenseNumber: string; // SC LLR Cosmetology/Salon License
}

export interface BeautySpecialist {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  branchId: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  avatar: string;
  bio: string;
  licenseId: string; // e.g. SC-COS-49201
}

export interface AppointmentBooking {
  id: string;
  referenceCode: string;
  branchId: string;
  branchName: string;
  serviceId: string;
  serviceName: string;
  servicePriceUSD: number;
  specialistId?: string;
  specialistName?: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g. 11:00 AM Eastern Time
  durationMinutes: number;
  addOns: string[];
  totalPriceUSD: number;
  depositPaidUSD: number;
  taxAmountUSD: number;
  gratuityUSD?: number;
  paymentMethod: 'apple_pay' | 'card' | 'google_pay' | 'salon_counter';
  status: 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  specialRequests?: string;
  createdAt: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: 'haircare' | 'skincare' | 'nailcare' | 'accessories' | 'gift-sets';
  priceUSD: number;
  volume: string; // e.g. 1.7 fl oz / 50 ml
  description: string;
  keyBenefits: string[];
  inStock: boolean;
  image: string;
  rating: number;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface MembershipTier {
  id: string;
  name: string;
  minimumSpendUSD: number;
  pointsMultiplier: number;
  perks: string[];
  color: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  tier: string;
  loyaltyPoints: number;
  memberSince: string;
  preferredBranchId: string;
  savedLookCount: number;
}

export type ViewMode = 
  | 'home'
  | 'services'
  | 'branches'
  | 'boutique'
  | 'membership'
  | 'virtual-studio'
  | 'customer-portal'
  | 'branch-console'
  | 'corporate-dashboard';

export type UserRole = 'guest' | 'client' | 'branch_manager' | 'corporate_admin';
