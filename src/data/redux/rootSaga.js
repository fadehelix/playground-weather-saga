import { all } from 'redux-saga/effects';
import { watchFetchResults } from './search/search.sagas';

export default function* rootSaga() {
  yield all([watchFetchResults()]);
}
