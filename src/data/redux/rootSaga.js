import { all } from 'redux-saga/effects';
import watchFetchLocation from 'data/redux/location/location.sagas';
import { watchFetchResults } from './search/search.sagas';

export default function* rootSaga() {
  yield all([watchFetchResults(), watchFetchLocation()]);
}
