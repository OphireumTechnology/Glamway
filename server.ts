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

// In-memory data store initialized with verified appointments for The Glamway (Charlotte, North Carolina)
let appointments: any[] = [
  {
    id: 'apt-101',
    referenceCode: 'GLAM-88219',
    branchId: 'branch-clt-uptown',
    branchName: 'The Glamway — Uptown Charlotte',
    serviceId: 'srv-full-lash-set',
    serviceName: 'Full Eyelash Extension Set',
    servicePriceUSD: 160,
    specialistName: 'Summer Davis (Licensed Esthetician)',
    date: '2026-11-14',
    timeSlot: '11:00 AM EST',
    durationMinutes: 120,
    addOns: [],
    totalPriceUSD: 160,
    depositPaidUSD: 48,
    taxAmountUSD: 11.60,
    gratuityUSD: 30,
    paymentMethod: 'apple_pay',
    status: 'confirmed',
    clientName: 'Victoria Harrison',
    clientPhone: '+1 (704) 555-0192',
    clientEmail: 'victoria.harrison@example.com',
    specialRequests: 'Natural hybrid lash map.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'apt-102',
    referenceCode: 'GLAM-88220',
    branchId: 'branch-clt-graham',
    branchName: 'The Glamway — Graham',
    serviceId: 'srv-custom-esthetician-facial',
    serviceName: 'Custom Esthetician Facial',
    servicePriceUSD: 110,
    specialistName: 'Summer Davis',
    date: '2026-11-14',
    timeSlot: '02:00 PM EST',
    durationMinutes: 60,
    addOns: [],
    totalPriceUSD: 110,
    depositPaidUSD: 33,
    taxAmountUSD: 7.98,
    gratuityUSD: 20,
    paymentMethod: 'card',
    status: 'confirmed',
    clientName: 'Eleanor Vance',
    clientPhone: '+1 (704) 555-8831',
    clientEmail: 'eleanor.vance@example.com',
    specialRequests: 'Sensitive skin hydration.',
    createdAt: new Date().toISOString()
  }
];

let orders: any[] = [
  {
    id: 'ord-501',
    referenceCode: 'ORD-7712',
    items: [{ productId: 'prod-003-glue', name: '0.03 Second Lash Adhesive', quantity: 2, priceUSD: 25 }],
    totalAmountUSD: 50,
    customerName: 'Katherine Bell',
    deliveryMethod: 'branch_pickup',
    branchId: 'branch-clt-uptown',
    paymentMethod: 'apple_pay',
    status: 'ready_for_pickup',
    createdAt: new Date().toISOString()
  }
];

// --- REST API ENDPOINTS ---

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    companyName: 'The Glamway',
    brand: 'The Glamway Beauty Salon',
    founder: 'Summer Davis (Licensed Esthetician)',
    location: 'Charlotte, North Carolina, USA',
    phone: '(704) 756-2253',
    email: 'theglamwayllc@icloud.com',
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

// AI Beauty Assistant grounded in verified The Glamway information
app.post('/api/ai/concierge', async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const systemInstruction = `You are the beauty concierge for "The Glamway" (Website: The Glamway Beauty Salon), located in Charlotte, North Carolina.
Founder: Summer Davis (born and raised in Charlotte; began lash training in 2017, licensed esthetician in 2018).
Locations in Charlotte:
- The Glamway — Uptown: 428 E. Fourth St., Charlotte, NC 28202
- The Glamway — Graham: 2506 Lucena St., Charlotte, NC 28206
Phone: (704) 756-2253
Email: theglamwayllc@icloud.com
Appointment Policy: 24-hour advance notice cancellation required.

Verified Service Categories:
1. Lashes: Full Eyelash Extension Sets ($160), Fill-Ins ($85), Top & Bottom Lash Sets ($195), Removals ($35).
2. Hair: Hair Styling & Install ($185), Silk Press & Treatment ($95), Maintenance Trim ($65).
3. Nails: Structured Gel Manicure ($75), Full Nail Enhancements ($85).
4. Facials: Custom Esthetician Facial ($110), Facial Glow & Brow Detailing ($65).

Verified Retail Products:
- 0.03 Second Glue ($25)
- 0.5 Second Glue ($25)
- Standard Lash Trays ($10)
- XL Lash Trays ($15)
- Classic Trays C, CC, D Curls ($15)
- DIY Lash Kit ($20)
- Glue Rings & Mascara Wands ($5)
- Wholesale Lash Packs ($150)
- Hair Shop: No products currently available.

Verified Training Courses:
- Beginner Lash Tech Course (4 hours, $650)
- Advanced Volume Lashes Course (2 hours, $300)

Tone: Professional, warm, accurate. Do not invent services or prices. Only state verified information.`;

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `Client inquiry: "${message}"\nContext: ${JSON.stringify(history || [])}`,
        config: {
          systemInstruction,
        }
      });
      return res.json({ reply: response.text || 'Welcome to The Glamway in Charlotte, NC. How can we assist you with our lash, hair, nail, facial services, or beauty supplies today?' });
    } catch (err: any) {
      console.error('Gemini API error:', err);
      return res.json({
        reply: `Welcome to The Glamway in Charlotte, NC. We offer professional eyelash extensions, hair services, structured nails, esthetician facials, lash supplies, and lash tech training courses. How may we assist you today?`
      });
    }
  } else {
    return res.json({
      reply: `Welcome to The Glamway in Charlotte, NC. How may we assist you with your appointment or supply order?`
    });
  }
});

// Operations forecasting
app.post('/api/ai/forecast', async (req, res) => {
  const { branchId } = req.body;
  const prompt = `Provide an executive brief for The Glamway salon location ${branchId || 'Charlotte Branches'}. Analyze booking demand in Charlotte, NC (EST), supply stock (lash glues and trays), and training enrollment.`;

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You are the Operations Director for The Glamway in Charlotte, NC. Provide concise bullet points on appointments, lash supply inventory, and training schedules.'
        }
      });
      return res.json({ forecast: response.text });
    } catch (err) {
      console.error('Gemini forecast error:', err);
    }
  }

  return res.json({
    forecast: `• Charlotte Demand: High appointment volume for full lash sets and fill-ins across Uptown and Graham locations.
• Retail Stock: 0.03 Second Glue and XL Lash Trays are top-selling items; regular restock scheduled.
• Training Sessions: 4-Hour Beginner Lash Tech Course running scheduled weekend sessions.`
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
    console.log(`The Glamway Platform (Charlotte, NC) running on port ${PORT}`);
  });
}

startServer();
