import actionTypes from './search.types';

export const setCurrentPhrase = (phrase) => ({
  type: actionTypes.SET_CURRENT_PHRASE,
  payload: phrase,
});
export const setResults = (results) => ({
  type: actionTypes.SET_RESULTS,
  payload: results,
});
