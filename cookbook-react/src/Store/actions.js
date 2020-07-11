export const fetchRecipes = () => {
  return (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => dispatch({ type: 'FetchRecipes', data: json }))
      .catch((err) => dispatch({ type: 'ERROR', msg: 'Unable to fetch data' }));
  };
};
