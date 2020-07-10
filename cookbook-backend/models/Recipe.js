const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  title: String,
  description: String,
  ingredients: [String],
  servings: Number,
  body: [{ title: String, body: String }],
});

RecipeSchema.set('collection', 'recipes');

module.exports = mongoose.model('Project', RecipeSchema);
