const intialState = {
  recipes: [],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'FetchRecipes':
      return { ...state, data: action.data };
    case 'ERROR':
      return { ...state, error: action.msg };
    default:
      return state;
  }
};

export default reducer;
