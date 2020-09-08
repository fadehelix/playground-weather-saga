import actionTypes from './location.types';

const INITIAL_STATE = {
  id: null,
  details: null,
  isLoading: false,
};

const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCATION_ID:
      return {
        ...state,
        id: action.payload,
      };
    case actionTypes.FETCH_LOCATION_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
        isLoading: false,
      };
    case actionTypes.FETCH_LOCATION_DETAILS_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default locationReducer;
