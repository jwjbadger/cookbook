const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe');
const BodySegment = require('../models/BodySegment');

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

router.post('/', async (req, res) => {
  const recipeCheck = await Recipe.findOne({ _id: req.body.id });
  if (recipeCheck != null) {
    return res.status(400).json({ err: 'Recipe already created!' });
  }

  const recipe = new Recipe({
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    servings: req.body.servings,
    body: req.body.body.map((value, index) => {
      return {
        title: value.title,
        body: value.body,
      };
    }),
  });

  // Save to database
  try {
    const savedRecipe = await recipe.save();
    res.status(200).json(savedRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Export
module.exports = router;
