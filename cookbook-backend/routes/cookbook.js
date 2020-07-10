const express = require('express');
const router = express.Router();

const Recipe = require('../models/Recipe');
const verify = require('../verify');

// Routes

// Get Route
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post Router
router.post('/', async (req, res) => {
  if (
    verify.isEmptyOrSpaces(req.body.title) ||
    verify.isEmptyOrSpaces(req.body.body[0].title)
  ) {
    return res.status(400).json({ err: 'Put content in title and body' });
  }
  const recipeCheck = await Recipe.findOne({ _id: req.body.id });
  if (recipeCheck != null) {
    return res.status(400).json({ err: 'Recipe already created!' });
  }

  const recipe = new Recipe({
    author: req.body.author,
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

// Put route
router.put('/:_id', async (req, res) => {
  try {
    if (
      verify.isEmptyOrSpaces(req.body.title) ||
      verify.isEmptyOrSpaces(req.body.body[0].title)
    ) {
      return res.status(400).json({ err: 'Put content in title and body' });
    }

    const recipe = new Recipe({
      _id: req.params._id,
      author: req.body.author,
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
    const updated = await Recipe.replaceOne({ _id: req.params._id }, recipe);

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ err: err.toString() });
  }
});

// Export
module.exports = router;
