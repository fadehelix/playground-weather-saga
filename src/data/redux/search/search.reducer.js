import actionTypes from './search.types';

const INITIAL_STATE = {
  phrase: '',
  results: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PHRASE:
      return {
        ...state,
        phrase: action.payload,
      };
    case actionTypes.SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
