import actionTypes from './search.types';

export const setCurrentTerm = (searchTerm) => ({
  type: actionTypes.SET_CURRENT_TERM,
  payload: searchTerm,
});
export const fetchResultsStart = (results) => ({
  type: actionTypes.FETCH_RESULTS_START,
  payload: results,
});
export const fetchResultsSuccess = (results) => ({
  type: actionTypes.FETCH_RESULTS_SUCCESS,
  payload: results,
});
