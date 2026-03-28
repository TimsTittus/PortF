import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import { sendContactEmail } from './services/emailService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Trust proxy for rate limiting (needed for Render/Vercel)
app.set('trust proxy', 1);

// Rate limiter for contact form: 5 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    error: 'Too many contact requests from this IP, please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// API routes
app.get('/api/test', (req, res) => {
  res.send('API is working');
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await sendContactEmail(name, email, subject, message);
    res.status(200).json({ success: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      response: error.response,
    });

    res.status(500).json({
      error: 'Something went wrong. Please try again.',
      details: error.message,
    });
  }
});

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// React Router fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/test`);
});