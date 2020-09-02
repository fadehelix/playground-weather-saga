import actionTypes from './location.types';

const INITIAL_STATE = {
  id: null,
  details: null,
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCATION_ID:
      return {
        ...state,
        id: action.payload,
      };
    case actionTypes.SET_LOCATION_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
