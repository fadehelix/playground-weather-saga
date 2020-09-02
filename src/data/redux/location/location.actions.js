import actionTypes from './location.types';

export const setLocationAction = (location) => ({
  type: actionTypes.SET_LOCATION_ID,
  payload: location,
});

export const setLocationDetailsAction = (locationData) => ({
  type: actionTypes.SET_LOCATION_DETAILS,
  payload: locationData,
});
