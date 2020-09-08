import actionTypes from './location.types';

export const setLocationIdAction = (location) => ({
  type: actionTypes.SET_LOCATION_ID,
  payload: location,
});

export const fetchLocationDetailsSuccessAction = (locationData) => ({
  type: actionTypes.FETCH_LOCATION_DETAILS_SUCCESS,
  payload: locationData,
});

export const fetchLocationDetailsStartAction = () => ({
  type: actionTypes.FETCH_LOCATION_DETAILS_START,
  payload: true,
});
