import actionTypes from './location.types';

const INITIAL_STATE = {
  data: null,
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return {
        ...state,
        data: action.payload,
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
