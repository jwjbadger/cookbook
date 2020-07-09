class RecipeSchema {
  constructor({ title, description, ingredients, body }) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.body = body;
  }
}

module.exports = RecipeSchema;
