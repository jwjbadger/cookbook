const mongoose = require('mongoose');

const BodySegment = require('./BodySegment');

const RecipeSchema = mongoose.Schema({
  title: String,
  description: String,
  ingredients: [String],
  servings: Number,
  body: [BodySegment],
});

RecipeSchema.set('collection', 'recipes');

module.exports = mongoose.model('Project', RecipeSchema);
