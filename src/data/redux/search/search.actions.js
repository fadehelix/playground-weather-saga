import actionTypes from './search.types';

export const setCurrentTerm = (searchTerm) => ({
  type: actionTypes.SET_CURRENT_TERM,
  payload: searchTerm,
});
export const setResults = (results) => ({
  type: actionTypes.SET_RESULTS,
  payload: results,
});
