import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with telemetry header
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
}) : null;

// In-memory data store initialized with baseline appointments for The Glamway Beauty Salon (North Carolina, EST)
let appointments: any[] = [
  {
    id: 'apt-101',
    referenceCode: 'GLAM-88219',
    branchId: 'branch-nc-1',
    branchName: 'Branch 1 — The Glamway Flagship',
    serviceId: 'srv-balayage-couture',
    serviceName: 'French Balayage & Glossing Ritual',
    servicePriceUSD: 285,
    specialistId: 'spec-camille',
    specialistName: 'Camille De La Rosa',
    date: '2026-11-14',
    timeSlot: '11:00 AM EST',
    durationMinutes: 180,
    addOns: ['Olaplex Bond Multiplier Infusion (+$45)'],
    totalPriceUSD: 330,
    depositPaidUSD: 100,
    taxAmountUSD: 23.10, // NC State 4.75% + local county option ~7%
    gratuityUSD: 60,
    paymentMethod: 'apple_pay',
    status: 'confirmed',
    clientName: 'Victoria Harrison',
    clientPhone: '+1 (919) 555-0192',
    clientEmail: 'victoria.harrison@example.com',
    specialRequests: 'Prefers quiet suite with herbal tea and champagne.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'apt-102',
    referenceCode: 'GLAM-88220',
    branchId: 'branch-nc-2',
    branchName: 'Branch 2 — The Glamway Atelier',
    serviceId: 'srv-hydra-radiance',
    serviceName: 'Botanical Radiance Hydra-Infusion',
    servicePriceUSD: 175,
    specialistId: 'spec-sophia',
    specialistName: 'Sophia Isabel Reyes',
    date: '2026-11-14',
    timeSlot: '02:00 PM EST',
    durationMinutes: 75,
    addOns: ['LED Photon Collagen Rejuvenation (+$35)'],
    totalPriceUSD: 210,
    depositPaidUSD: 65,
    taxAmountUSD: 14.70,
    gratuityUSD: 40,
    paymentMethod: 'card',
    status: 'confirmed',
    clientName: 'Eleanor Vance',
    clientPhone: '+1 (704) 555-8831',
    clientEmail: 'eleanor.vance@example.com',
    specialRequests: 'Sensitive skin barrier recovery.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'apt-103',
    referenceCode: 'GLAM-88221',
    branchId: 'branch-nc-1',
    branchName: 'Branch 1 — The Glamway Flagship',
    serviceId: 'srv-gold-couture-mani',
    serviceName: 'Glamway 24K Gold Couture Manicure',
    servicePriceUSD: 85,
    specialistId: 'spec-elena',
    specialistName: 'Elena Santos-Villar',
    date: '2026-11-13',
    timeSlot: '10:30 AM EST',
    durationMinutes: 75,
    addOns: [],
    totalPriceUSD: 85,
    depositPaidUSD: 30,
    taxAmountUSD: 5.95,
    gratuityUSD: 20,
    paymentMethod: 'apple_pay',
    status: 'completed',
    clientName: 'Margaret Campbell',
    clientPhone: '+1 (919) 555-4421',
    clientEmail: 'margaret.c@example.com',
    createdAt: new Date().toISOString()
  }
];

let orders: any[] = [
  {
    id: 'ord-501',
    referenceCode: 'ORD-7712',
    items: [{ productId: 'prod-caviar-serum', name: 'The Glamway L’Élixir D’Or Caviar Serum', quantity: 1, priceUSD: 145 }],
    totalAmountUSD: 145,
    customerName: 'Katherine Bell',
    deliveryMethod: 'branch_pickup',
    branchId: 'branch-nc-1',
    paymentMethod: 'apple_pay',
    status: 'ready_for_pickup',
    createdAt: new Date().toISOString()
  }
];

// --- REST API ENDPOINTS ---

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    brand: 'The Glamway Beauty Salon — FOR WOMEN',
    location: 'North Carolina, United States of America',
    branchesCount: 2,
    timeZone: 'America/New_York (EST/EDT)',
    currency: 'USD ($)',
    timestamp: new Date().toISOString(),
    aiConfigured: Boolean(apiKey)
  });
});

app.get('/api/appointments', (req, res) => {
  const { branchId, date } = req.query;
  let filtered = [...appointments];
  if (branchId) {
    filtered = filtered.filter(a => a.branchId === branchId);
  }
  if (date) {
    filtered = filtered.filter(a => a.date === date);
  }
  res.json({ success: true, count: filtered.length, appointments: filtered });
});

app.post('/api/appointments', (req, res) => {
  const body = req.body;
  if (!body.branchId || !body.serviceId || !body.date || !body.timeSlot || !body.clientName) {
    return res.status(400).json({ success: false, error: 'Missing mandatory appointment fields.' });
  }

  // Conflict Prevention: ensure the specialist is not double booked at the exact branch, date & slot
  if (body.specialistId) {
    const conflict = appointments.find(a => 
      a.specialistId === body.specialistId &&
      a.date === body.date &&
      a.timeSlot === body.timeSlot &&
      a.status !== 'cancelled'
    );
    if (conflict) {
      return res.status(409).json({ 
        success: false, 
        error: `The requested specialist already has a confirmed booking for ${body.timeSlot} on ${body.date}. Please select an adjacent time slot.` 
      });
    }
  }

  const newAppointment = {
    ...body,
    id: `apt-${Date.now()}`,
    referenceCode: `GLAM-${Math.floor(10000 + Math.random() * 90000)}`,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };

  appointments.unshift(newAppointment);
  res.status(201).json({ success: true, appointment: newAppointment });
});

app.patch('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const index = appointments.findIndex(a => a.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Appointment not found' });
  }
  if (status) {
    appointments[index].status = status;
  }
  res.json({ success: true, appointment: appointments[index] });
});

app.get('/api/orders', (_req, res) => {
  res.json({ success: true, count: orders.length, orders });
});

app.post('/api/orders', (req, res) => {
  const body = req.body;
  const newOrder = {
    ...body,
    id: `ord-${Date.now()}`,
    referenceCode: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };
  orders.unshift(newOrder);
  res.status(201).json({ success: true, order: newOrder });
});

// AI Beauty Concierge endpoint (The Glamway Beauty Salon grounded)
app.post('/api/ai/concierge', async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const systemInstruction = `You are "Madame Glamway", the sophisticated, warm, and highly knowledgeable Chief Beauty Concierge for "The Glamway Beauty Salon — FOR WOMEN", a premier luxury women's salon and wellness company with two branches in North Carolina, United States:
- Branch 1 — The Glamway Flagship (North Carolina)
- Branch 2 — The Glamway Atelier (North Carolina)

Official Brand: The Glamway Beauty Salon
Tagline: FOR WOMEN
Color Identity: Pearl Ivory, Champagne Gold, Blush Rose, Rose Beige, Mauve Plum, and Espresso.
Primary currency: United States Dollar (USD, $).
Time Zone: America/New_York (Eastern Time, ET).

Services & Pricing in USD:
1. French Balayage & Glossing Ritual: $285 (180 mins)
2. Caviar Silk Keratin Infusion (Frizz defense for humidity): $320 (150 mins)
3. Precision Signature Cut & Blowout: $95 (60 mins)
4. Glamway 24K Gold Couture Manicure: $85 (75 mins)
5. Imperial Botanical Foot Retreat: $95 (90 mins)
6. Botanical Radiance Hydra-Infusion (Facial): $175 (75 mins)
7. Black Caviar & Peptide Youth Sculpt: $245 (90 mins)
8. Cashmere Feather Lash Extension: $160 (105 mins)
9. 3D Nano Brow Sculpt & Lamination: $85 (60 mins)
10. Warm Basalt & Sweet Jasmine Massage: $145 (90 mins)
11. The Glamway Empress Day Retreat (VIP 5-hour suite package): $595

Tone & Polish:
- Warm, luxurious, highly respectful, feminine, and sophisticated.
- Adhere strictly to verified service prices in USD.
- Highlight women-focused private suites, expert color formulations, and customized treatments.
- Never invent medical diagnoses; describe treatments as licensed cosmetic and wellness rituals.`;

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `Guest inquiry: "${message}"\nPrevious context: ${JSON.stringify(history || [])}`,
        config: {
          systemInstruction,
        }
      });
      return res.json({ reply: response.text || 'Welcome to The Glamway Beauty Salon. How may I assist in curating your luxury experience today?' });
    } catch (err: any) {
      console.error('Gemini Concierge API error:', err);
      return res.json({
        reply: `Welcome to The Glamway Beauty Salon — FOR WOMEN. We are delighted to assist you at our North Carolina sanctuaries. Our most requested rituals include our French Balayage & Glossing ($285) for radiant dimensional tone, and our Caviar Silk Keratin Infusion ($320) for lasting humidity protection. Would you like to reserve a private suite?`
      });
    }
  } else {
    return res.json({
      reply: `Welcome to The Glamway Beauty Salon — FOR WOMEN. Our two North Carolina branches provide bespoke hair couture, botanical dermal facials, 24K gold nail art, and private VIP suites. Please explore our booking scheduler or let me know what experience you desire.`
    });
  }
});

// AI Operations Command Center Forecasting endpoint
app.post('/api/ai/forecast', async (req, res) => {
  const { branchId } = req.body;
  const prompt = `Provide an executive operational brief for salon branch ${branchId || 'All Two North Carolina Branches'} of The Glamway Beauty Salon. Analyze booking demand trends in Eastern Time, top requested treatments (French Balayage, Keratin Silk, Hydra-Infusion, 24K Gold Nails), and actionable recommendations for inventory replenishment and licensed staff scheduling. Format with concise bullet points for the Executive Director.`;

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You are the Executive Vice President of Operations for The Glamway Beauty Salon in North Carolina. Deliver concise, high-value financial, compliance, and operational recommendations in USD.'
        }
      });
      return res.json({ forecast: response.text });
    } catch (err) {
      console.error('Gemini forecast error:', err);
    }
  }

  return res.json({
    forecast: `• Peak Demand (EST): Friday & Saturday bridal party occupancy tracking at 94% across Branch 1 and Branch 2.
• Staff Scheduling: Recommend scheduling 2 additional licensed master colorists for Branch 1 Saturday afternoon shifts.
• Inventory Alert: Caviar Restorative Serum (1.7 fl oz) and 24K Gold Leaf inventory low; automatic reorder of 30 units suggested.
• Service Growth: Keratin Silk Smoothing and French Balayage bookings up +28% month-over-month.`
  });
});

// Development vs Production serving
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`The Glamway Beauty Salon Platform (North Carolina, USA) running on port ${PORT}`);
  });
}

startServer();
