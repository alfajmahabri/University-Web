const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/CloudShelf', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
  const db = mongoose.connection.db;
  db.listCollections({ name: 'dypcet' }).next((err, collection) => {
    if (!collection) {
      db.createCollection('dypcet');
    }
  });
}).catch(err => console.error('MongoDB connection error:', err));

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
}, {
  collection: 'dypcet',
  versionKey: false
});

const Application = mongoose.model('Application', applicationSchema, 'dypcet');

app.post('/api/apply', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    console.log('Attempting to save:', { name, email, phone });
    const application = new Application({ name, email, phone });
    const result = await application.save();
    console.log('Document saved:', result);
    const saved = await Application.findById(result._id);
    console.log('Verified saved document:', saved);
    res.status(201).json({
      message: 'Application submitted successfully',
      id: result._id
    });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/applications', async (req, res) => {
  try {
    const applications = await Application.find({});
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
