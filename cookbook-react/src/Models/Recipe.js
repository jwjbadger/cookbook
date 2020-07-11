class RecipeSchema {
  constructor({ title, description, author, ingredients, servings, body }) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.ingredients = ingredients;
    this.servings = servings;
    this.body = body;
  }
}

module.exports = RecipeSchema;
