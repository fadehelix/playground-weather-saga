import actionTypes from './location.types';

export const setLocationAction = (location) => ({
  type: actionTypes.SET_LOCATION,
  payload: location,
});
