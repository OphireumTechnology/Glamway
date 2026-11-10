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

// In-memory data store initialized with baseline appointments in South Carolina (EST)
let appointments: any[] = [
  {
    id: 'apt-101',
    referenceCode: 'AUR-88219',
    branchId: 'branch-charleston',
    branchName: 'Aurélia Charleston Historic Sanctuary',
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
    taxAmountUSD: 29.70, // SC State 6% + Charleston County 3% = 9%
    gratuityUSD: 60,
    paymentMethod: 'apple_pay',
    status: 'confirmed',
    clientName: 'Caroline Rutledge Pinckney',
    clientPhone: '+1 (843) 555-0192',
    clientEmail: 'caroline.pinckney@example.com',
    specialRequests: 'Prefers quiet suite overlooking private courtyard garden with iced sweet tea.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'apt-102',
    referenceCode: 'AUR-88220',
    branchId: 'branch-greenville',
    branchName: 'Aurélia Greenville Main Street Penthouse',
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
    taxAmountUSD: 12.60,
    gratuityUSD: 40,
    paymentMethod: 'card',
    status: 'confirmed',
    clientName: 'Eleanor Vance',
    clientPhone: '+1 (864) 555-8831',
    clientEmail: 'eleanor.vance@example.com',
    specialRequests: 'Sensitive skin barrier recovery post-travel.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'apt-103',
    referenceCode: 'AUR-88221',
    branchId: 'branch-charleston',
    branchName: 'Aurélia Charleston Historic Sanctuary',
    serviceId: 'srv-gold-couture-mani',
    serviceName: 'Aurélia 24K Gold Couture Manicure',
    servicePriceUSD: 85,
    specialistId: 'spec-elena',
    specialistName: 'Elena Santos-Villar',
    date: '2026-11-13',
    timeSlot: '10:30 AM EST',
    durationMinutes: 75,
    addOns: [],
    totalPriceUSD: 85,
    depositPaidUSD: 30,
    taxAmountUSD: 7.65,
    gratuityUSD: 20,
    paymentMethod: 'apple_pay',
    status: 'completed',
    clientName: 'Margaret Middleton',
    clientPhone: '+1 (843) 555-4421',
    clientEmail: 'margaret.m@example.com',
    createdAt: new Date().toISOString()
  }
];

let orders: any[] = [
  {
    id: 'ord-501',
    referenceCode: 'ORD-7712',
    items: [{ productId: 'prod-caviar-serum', name: 'Aurélia L’Élixir D’Or Caviar Restorative Serum', quantity: 1, priceUSD: 145 }],
    totalAmountUSD: 145,
    customerName: 'Katherine Calhoun',
    deliveryMethod: 'branch_pickup',
    branchId: 'branch-charleston',
    paymentMethod: 'apple_pay',
    status: 'ready_for_pickup',
    createdAt: new Date().toISOString()
  }
];

// --- REST API ENDPOINTS ---

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    market: 'South Carolina, USA',
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
    referenceCode: `AUR-${Math.floor(10000 + Math.random() * 90000)}`,
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

// AI Beauty Concierge endpoint (South Carolina grounded)
app.post('/api/ai/concierge', async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const systemInstruction = `You are "Madame Aurélia", the sophisticated, warm, and highly knowledgeable Chief Beauty Concierge for Aurélia Haute Beauté, a premier luxury women's salon and wellness network in South Carolina, USA with destinations in:
- Charleston Historic Sanctuary (284 King Street, Charleston, SC 29401)
- Greenville Main Street Penthouse (103 N Main Street, Greenville, SC 29601)
- Columbia Vista Suite (812 Gervais Street, Columbia, SC 29201)
- Hilton Head Coastal Resort Pavilion (100 Lighthouse Road, Hilton Head Island, SC 29928)
- Mount Pleasant Waterfront Villa (410 W Coleman Blvd, Mount Pleasant, SC 29464)

Primary currency is United States Dollar (USD, $).
Time Zone is America/New_York (Eastern Time, ET).

Services & Pricing in USD:
1. French Balayage & Glossing Ritual: $285 (180 mins)
2. Caviar Silk Keratin Infusion (Frizz defense for Lowcountry coastal humidity): $320 (150 mins)
3. Precision Signature Cut & Blowout: $95 (60 mins)
4. Aurélia 24K Gold Couture Manicure: $85 (75 mins)
5. Imperial Botanical Foot Retreat: $95 (90 mins)
6. Botanical Radiance Hydra-Infusion (Facial): $175 (75 mins)
7. Black Caviar & Peptide Youth Sculpt: $245 (90 mins)
8. Cashmere Feather Lash Extension: $160 (105 mins)
9. 3D Nano Brow Sculpt & Lamination: $85 (60 mins)
10. Warm Basalt & Sweet Jasmine Massage: $145 (90 mins)
11. The Grand Empress Day Retreat (VIP 5-hour suite package): $595

Tone & Polish:
- Warm Southern hospitality combined with European haute beauté sophistication.
- Highlight hair resilience against coastal Southern humidity (Caviar Keratin, UV thermal protectants).
- Recommend specific services, provide preparation/aftercare, and invite the guest to select their preferred South Carolina location.
- Never invent unauthorized medical claims; clearly present skincare as licensed cosmetic sanctuary rituals.`;

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `Guest inquiry: "${message}"\nPrevious context: ${JSON.stringify(history || [])}`,
        config: {
          systemInstruction,
        }
      });
      return res.json({ reply: response.text || 'Welcome to Aurélia Haute Beauté South Carolina. How may I assist in curating your sanctuary visit today?' });
    } catch (err: any) {
      console.error('Gemini Concierge API error:', err);
      return res.json({
        reply: `Welcome to Aurélia Haute Beauté. We would be delighted to welcome you to our Charleston, Greenville, Columbia, Hilton Head Island, or Mount Pleasant sanctuaries. Our most requested rituals include our Caviar Silk Keratin Infusion ($320) for lasting Lowcountry humidity protection, and our French Balayage & Glossing ($285) for radiant dimensional tone. Would you like to reserve an appointment?`
      });
    }
  } else {
    return res.json({
      reply: `Welcome to Aurélia Haute Beauté South Carolina. Our destination sanctuaries in Charleston, Greenville, Columbia, Mount Pleasant, and Hilton Head Island provide bespoke hair couture, botanical dermal facials, 24K gold nail art, and private suites. Please explore our booking scheduler or let me know what experience you desire.`
    });
  }
});

// AI Operations Command Center Forecasting endpoint
app.post('/api/ai/forecast', async (req, res) => {
  const { branchId } = req.body;
  const prompt = `Provide an executive operational brief for salon branch ${branchId || 'All South Carolina Locations'} of Aurélia Haute Beauté USA. Analyze booking demand trends in Eastern Time, Lowcountry weekend wedding and bridal surges, top requested treatments (French Balayage, Keratin Humidity Defense, Hydra-Infusion, 24K Gold Nails), and actionable recommendations for inventory replenishment and SC LLR licensed staff scheduling. Format with concise bullet points for the Executive Director.`;

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You are the Executive Vice President of Operations for Aurélia Haute Beauté South Carolina. Deliver concise, high-value financial, compliance, and operational recommendations in USD.'
        }
      });
      return res.json({ forecast: response.text });
    } catch (err) {
      console.error('Gemini forecast error:', err);
    }
  }

  return res.json({
    forecast: `• Peak Demand (EST): Friday & Saturday bridal party occupancy tracking at 96% in Charleston & Mount Pleasant.
• Staff Scheduling: Recommend scheduling 2 additional SC LLR-licensed master colorists for King Street Saturday afternoon shifts.
• Inventory Alert: Caviar Restorative Serum (1.7 fl oz) and 24K Gold Leaf inventory low across Greenville and Columbia; automatic reorder of 45 units suggested.
• Service Growth: Coastal Keratin Humidity Infusion bookings up +32% across the Lowcountry.`
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
    console.log(`Aurélia Haute Beauté Platform (South Carolina, USA) running on port ${PORT}`);
  });
}

startServer();
