import actionTypes from './search.types';

const INITIAL_STATE = {
  term: '',
  results: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_TERM:
      return {
        ...state,
        term: action.payload,
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
