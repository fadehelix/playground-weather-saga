import { put, takeLatest, call, delay } from 'redux-saga/effects';
import API from 'data/api';
import SearchActionTypes from './search.types';
import {
  fetchResultsSuccess as fetchResultsSuccessAction,
  fetchResultsStart as fetchResultsStartAction,
} from './search.actions';

function callApi(searchQuery) {
  return searchQuery.length > 1 ? call(API.searchLocations, searchQuery) : [];
}

function* fetchResults(action) {
  yield delay(500);
  yield put(fetchResultsStartAction(true));
  const results = yield callApi(action.payload);

  yield put(fetchResultsSuccessAction(results));
}

export function* watchFetchResults() {
  yield takeLatest(SearchActionTypes.SET_CURRENT_TERM, fetchResults);
}
