import actionTypes from './search.types';

const INITIAL_STATE = {
  term: '',
  results: null,
  isLoading: false,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_TERM:
      return {
        ...state,
        term: action.payload,
      };
    case actionTypes.FETCH_RESULTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default searchReducer;
