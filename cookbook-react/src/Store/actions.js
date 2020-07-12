const axios = require('axios').default;

const ROOT_URL = 'http://localhost:4000/';

export const fetchRecipes = () => {
  return (dispatch) => {
    return axios
      .get(ROOT_URL + 'cookbook')
      .then((rawData) =>
        dispatch({ type: '[Recipes] Fetch Recipes', data: rawData.data }),
      )
      .catch((err) => dispatch({ type: 'ERROR', msg: 'Unable to fetch data' }));
  };
};
