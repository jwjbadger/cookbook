const axios = require('axios').default;

const ROOT_URL = 'http://localhost:4000/';

export const fetchRecipes = () => {
  return (dispatch) => {
    return axios
      .get(ROOT_URL + 'cookbook')
      .then((rawData) =>
        dispatch({ type: '[Recipes] Fetch Recipes', data: rawData.data }),
      )
      .catch((err) =>
        dispatch({ type: '[Action] Error', msg: 'Unable to fetch data' }),
      );
  };
};

export const postRecipe = (recipe) => {
  return (dispatch) => {
    return axios
      .post(ROOT_URL + 'cookbook', encodeRecipe(recipe))
      .then((rawData) =>
        dispatch({ type: '[Recipes] Post Recipe', data: rawData.data }),
      )
      .catch((err) =>
        dispatch({ type: '[Action] Error', msg: 'Unable to post data' }),
      );
  };
};

const encodeRecipe = (recipe) => {
  return {
    ingredients: recipe.ingredients,
    title: recipe.title,
    description: recipe.description,
    author: recipe.author,
    servings: recipe.servings,
    body: decodeRecipeBody(recipe.body),
  };
};

const decodeRecipeBody = (body) => {
  return body.map((item) => {
    return { title: item.title, body: item.body };
  });
};
