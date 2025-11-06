require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_NAME = 'dyp.dypcet';

// Validate database name
if (!process.env.MONGO_URI.includes(DB_NAME)) {
  console.error('Invalid database name in MONGO_URI. Expected:', DB_NAME);
  process.exit(1);
}

// More specific CORS config
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

// Use MONGO_URI from .env
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI not found in environment variables');
  process.exit(1);
}

app.use(express.json());

// Applicant schema & model
const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});
const Applicant = mongoose.model('Applicant', applicantSchema);

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Save applicant
app.post('/api/apply', async (req, res) => {
  try {
    const { name, email, phone } = req.body || {};
    if (!name || !email || !phone) return res.status(400).json({ message: 'name, email and phone are required' });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ message: 'Invalid email' });

    const digits = (phone || '').replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) return res.status(400).json({ message: 'Invalid phone number' });

    const applicant = new Applicant({ name: name.trim(), email: email.trim(), phone: phone.trim() });
    await applicant.save();

    return res.status(201).json({ message: 'Applicant saved' });
  } catch (err) {
    console.error('Error saving applicant:', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Not found handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Check if we have the MongoDB URI
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not defined in .env file');
  process.exit(1);
}

// Connection with debug logging
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  try {
    // Test database access
    await mongoose.connection.db.admin().ping();
    console.log('MongoDB connection successful and authenticated');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (error) {
    console.error('Database access error:', error.message);
    process.exit(1);
  }
})
.catch(err => {
  console.error('\nMongoDB connection error details:');
  console.error(`Connection string: ${process.env.MONGO_URI.replace(/:[^:@]{1,}@/, ':****@')}`);
  console.error(`Error: ${err.message}`);
  console.error('\nTroubleshooting steps:');
  console.error('1. Check Network Access in MongoDB Atlas');
  console.error('2. Add your current IP to the IP Access List');
  console.error('3. Verify username and password');
  process.exit(1);
});
