export type ServiceCategory = 
  | 'lashes'
  | 'hair'
  | 'nails'
  | 'facial';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  durationMinutes: number;
  priceUSD?: number;
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
  state: 'NC';
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
  locationNote?: string;
  licenseNumber?: string;
}

export interface BeautySpecialist {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  branchId?: string;
  avatar: string;
  bio: string;
  licenseId?: string;
  experienceYears?: number;
  rating?: number;
  reviewsCount?: number;
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
  paymentMethod: 'apple_pay' | 'card' | 'google_pay' | 'salon_counter';
  status: 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  specialRequests?: string;
  createdAt: string;
}

export type ShopCategory = 'all' | 'lash-supplies' | 'lash-trays' | 'shop-hair' | 'best-sellers' | 'wholesale';

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: 'lash-supplies' | 'lash-trays' | 'shop-hair' | 'best-sellers' | 'wholesale';
  priceUSD: number;
  specification?: string;
  description: string;
  keyBenefits?: string[];
  inStock: boolean;
  image: string;
  rating?: number;
  volume?: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface TrainingCourse {
  id: string;
  title: string;
  durationHours: number;
  priceUSD: number;
  targetAudience: string;
  description: string;
  curriculum: string[];
  image: string;
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
  | 'about'
  | 'services'
  | 'branches'
  | 'booking'
  | 'boutique'
  | 'training'
  | 'contact'
  | 'membership'
  | 'customer-portal'
  | 'branch-console'
  | 'corporate-dashboard'
  | 'gallery'
  | 'virtual-studio';

export type UserRole = 'guest' | 'client' | 'branch_manager' | 'corporate_admin';
