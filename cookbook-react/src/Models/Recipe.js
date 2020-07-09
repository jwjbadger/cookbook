class RecipeSchema {
  constructor({ title, description, ingredients, servings, body }) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.servings = servings;
    this.body = body;
  }
}

module.exports = RecipeSchema;
