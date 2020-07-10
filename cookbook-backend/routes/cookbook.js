const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe');

// Routes

// Get Route
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

// Export
module.exports = router;
