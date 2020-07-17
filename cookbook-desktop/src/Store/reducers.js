import RecipeSchema from '../Models/Recipe';
import BodySegmentSchema from '../Models/BodySegment';

const intialState = {
  recipes: [],
  data: null,
  error: '',
};

const decodeRecipe = (recipe) => {
  return new RecipeSchema({
    _id: recipe._id,
    title: recipe.title,
    description: recipe.description,
    author: recipe.author,
    servings: recipe.servings,
    ingredients: recipe.ingredients,
    body: recipe.body.map((value) => {
      return new BodySegmentSchema({ title: value.title, body: value.body });
    }),
  });
};

const decodeRecipes = (recipes) => {
  return recipes.map((recipe) => {
    return decodeRecipe(recipe);
  });
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case '[Recipes] Fetch Recipes':
      return { ...state, recipes: decodeRecipes(action.data) };
    case '[Recipes] Post Recipe':
      return {
        ...state,
        recipes: [...state.recipes, decodeRecipe(action.data)],
      };
    case '[Recipes] Put Recipe':
      return { ...state };
    case '[Action] Error':
      return { ...state, error: action.msg };
    default:
      return state;
  }
};

export default reducer;
