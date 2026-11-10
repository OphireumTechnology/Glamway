import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  ViewMode, 
  UserRole, 
  SalonBranch, 
  ServiceItem, 
  AppointmentBooking, 
  CartItem, 
  ProductItem, 
  UserProfile 
} from '../types';
import { SALON_BRANCHES, SALON_SERVICES, BOUTIQUE_PRODUCTS } from '../data/salonData';

interface SalonContextType {
  currentView: ViewMode;
  setCurrentView: (view: ViewMode) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  selectedBranchId: string;
  setSelectedBranchId: (id: string) => void;
  branches: SalonBranch[];
  services: ServiceItem[];
  products: ProductItem[];
  appointments: AppointmentBooking[];
  activeAppointmentModal: boolean;
  openBookingModal: (serviceId?: string, branchId?: string) => void;
  closeBookingModal: () => void;
  preselectedServiceId?: string;
  preselectedBranchId?: string;
  isAiConciergeOpen: boolean;
  setIsAiConciergeOpen: (open: boolean) => void;
  cart: CartItem[];
  addToCart: (product: ProductItem, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  currentUser: UserProfile;
  createBooking: (bookingData: Omit<AppointmentBooking, 'id' | 'referenceCode' | 'status' | 'createdAt'>) => Promise<{ success: boolean; error?: string; appointment?: AppointmentBooking }>;
  cancelBooking: (id: string) => Promise<boolean>;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

export const SalonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [userRole, setUserRole] = useState<UserRole>('guest');
  const [selectedBranchId, setSelectedBranchId] = useState<string>('all');
  const [branches] = useState<SalonBranch[]>(SALON_BRANCHES);
  const [services] = useState<ServiceItem[]>(SALON_SERVICES);
  const [products] = useState<ProductItem[]>(BOUTIQUE_PRODUCTS);
  const [appointments, setAppointments] = useState<AppointmentBooking[]>([]);
  const [activeAppointmentModal, setActiveAppointmentModal] = useState<boolean>(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [preselectedBranchId, setPreselectedBranchId] = useState<string | undefined>(undefined);
  const [isAiConciergeOpen, setIsAiConciergeOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [currentUser, setCurrentUser] = useState<UserProfile>({
    id: 'guest', name: 'Guest', email: '', phone: '', tier: '',
    loyaltyPoints: 0, memberSince: '', preferredBranchId: '', savedLookCount: 0
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Appointment records must only be loaded after authenticated backend access is implemented.
  // Never fetch other customers' bookings from a public page.

  const openBookingModal = (serviceId?: string, branchId?: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedBranchId(branchId);
    setActiveAppointmentModal(true);
  };

  const closeBookingModal = () => {
    setActiveAppointmentModal(false);
    setPreselectedServiceId(undefined);
    setPreselectedBranchId(undefined);
  };

  const addToCart = (product: ProductItem, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    showToast(`Added ${product.name} to your boutique bag.`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  const createBooking = async (bookingData: Omit<AppointmentBooking, 'id' | 'referenceCode' | 'status' | 'createdAt'>) => {
    try {
      const apiBase = import.meta.env.VITE_BOOKING_API_URL;
      if (!apiBase) return { success: false, error: 'Online booking is temporarily unavailable. Contact the salon for appointment availability.' };
      const res = await fetch(`${apiBase.replace(/\\/$/, '')}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setAppointments(prev => [data.appointment, ...prev]);
        const pointsEarned = Math.floor(bookingData.totalPriceUSD * 1.5);
        setCurrentUser(u => ({ ...u, loyaltyPoints: u.loyaltyPoints + pointsEarned }));
        showToast(`Appointment confirmed! Reference: ${data.appointment.referenceCode}`);
        return { success: true, appointment: data.appointment };
      } else {
        return { success: false, error: data.error || 'Failed to book appointment' };
      }
    } catch {
      return { success: false, error: 'Online booking is temporarily unavailable. No appointment has been confirmed.' };
    }
  };

  const cancelBooking = async (id: string) => {
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'cancelled' })
      });
      if (res.ok) {
        setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'cancelled' } : a));
        showToast('Appointment was cancelled.');
        return true;
      }
    } catch {
      showToast('Cancellation could not be verified. Please contact the salon.');
      return false;
    }
    return false;
  };

  return (
    <SalonContext.Provider
      value={{
        currentView,
        setCurrentView,
        userRole,
        setUserRole,
        selectedBranchId,
        setSelectedBranchId,
        branches,
        services,
        products,
        appointments,
        activeAppointmentModal,
        openBookingModal,
        closeBookingModal,
        preselectedServiceId,
        preselectedBranchId,
        isAiConciergeOpen,
        setIsAiConciergeOpen,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        currentUser,
        createBooking,
        cancelBooking,
        toastMessage,
        showToast
      }}
    >
      {children}
    </SalonContext.Provider>
  );
};

export const useSalon = () => {
  const context = useContext(SalonContext);
  if (!context) {
    throw new Error('useSalon must be used within a SalonProvider');
  }
  return context;
};
