const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// 🧠 In-memory store
let lastBan = null;
let lastUnban = null;

// ✅ Root page
app.get('/', (req, res) => {
  res.send('OK - Ban/Unban API is live!');
});

// 📤 GET last ban
app.get('/lastban', (req, res) => {
  if (!lastBan) return res.json({});
  const data = { ...lastBan };
  lastBan = null; // Optional auto-clear
  res.json(data);
});

// 📤 GET last unban
app.get('/lastunban', (req, res) => {
  if (!lastUnban) return res.json({});
  const data = { ...lastUnban };
  lastUnban = null; // Optional auto-clear
  res.json(data);
});

// 🚫 POST ban request
app.post('/lastban', (req, res) => {
  const { username, reason } = req.body;

  if (!username) {
    return res.status(400).json({ success: false, message: 'Missing username.' });
  }

  const safeReason = reason && reason.trim() !== '' ? reason : 'You have been banned.';

  console.log(`📥 Ban request received: ${username} | Reason: ${safeReason}`);
  lastBan = {
    username,
    reason: safeReason,
    timestamp: new Date().toISOString(),
  };

  res.json({ success: true, message: `Ban request for ${username} stored.` });
});

// 🟢 POST unban request
app.post('/lastunban', (req, res) => {
  const { username, reason } = req.body;

  if (!username) {
    return res.status(400).json({ success: false, message: 'Missing username.' });
  }

  console.log(`🟢 Unban request received: ${username} | Reason: ${reason || 'No reason provided'}`);
  lastUnban = {
    username,
    reason: reason || 'No reason provided',
    timestamp: new Date().toISOString(),
  };

  res.json({ success: true, message: `Unban request for ${username} stored.` });
});

// 🧼 Manual clear endpoint
app.post('/clear', (req, res) => {
  lastBan = null;
  lastUnban = null;
  res.json({ success: true, message: 'Ban and unban data cleared.' });
});

// 🚀 Start the server
app.listen(port, () => {
  console.log(`✅ Ban/Unban server running at http://localhost:${port}`);
});
