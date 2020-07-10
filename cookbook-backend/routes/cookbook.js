const express = require('express');
const router = express.Router();

// Routes

// Test Route
router.get('/', (req, res) => {
  res.status(200).json({ ok: 'hello' });
});

// Export
module.exports = router;
