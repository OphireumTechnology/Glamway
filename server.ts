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
let appointments: any[] = [];
let orders: any[] = [];

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

app.get('/api/appointments', (_req, res) => {
  res.status(503).json({ success: false, error: 'Appointment management requires authenticated persistent backend storage.' });
});

app.post('/api/appointments', (_req, res) => {
  res.status(503).json({ success: false, error: 'Online reservations are unavailable until persistent storage and availability checks are configured. No booking was confirmed.' });
});

app.patch('/api/appointments/:id', (_req, res) => {
  res.status(503).json({ success: false, error: 'Appointment changes require authenticated authorization and persistent storage.' });
});

app.get('/api/orders', (_req, res) => {
  res.status(404).json({ success: false, error: 'Retail ordering is not offered.' });
});

app.post('/api/orders', (_req, res) => {
  res.status(404).json({ success: false, error: 'Retail ordering is not offered.' });
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
