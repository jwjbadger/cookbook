const intialState = {
  recipes: [],
  data: null,
  error: '',
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case '[Recipes] Fetch Recipes':
      return { ...state, recipes: action.data };
    case '[Action] Error':
      return { ...state, error: action.msg };
    default:
      return state;
  }
};

export default reducer;
