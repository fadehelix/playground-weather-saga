import actionTypes from './location.types';

export const searchLocationAction = (location) => ({
  type: actionTypes.SEARCH_LOCATION,
  payload: location,
});
