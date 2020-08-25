import actionTypes from './location.types';

const INITIAL_STATE = {
  data: null,
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_LOCATION:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
