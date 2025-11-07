const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/CloudShelf', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Schema
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  submittedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model('dypcet', applicationSchema);

// API Routes
app.post('/api/apply', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const application = new Application({ name, email, phone });
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ message: 'Error submitting application' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
