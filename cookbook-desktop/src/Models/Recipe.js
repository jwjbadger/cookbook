class RecipeSchema {
  constructor({
    _id,
    title,
    description,
    author,
    ingredients,
    servings,
    body,
  }) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.ingredients = ingredients;
    this.servings = servings;
    this.body = body;
  }
}

export default RecipeSchema;
