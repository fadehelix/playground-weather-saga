import { takeLatest, put, call } from 'redux-saga/effects';
import locationTypes from 'data/redux/location/location.types';
import {
  fetchLocationDetailsSuccessAction,
  fetchLocationDetailsStartAction,
} from 'data/redux/location/location.actions';

import API from 'data/api';

function* fetchLocation(action) {
  yield put(fetchLocationDetailsStartAction());
  const response = yield call(API.fetchLocation, action.payload);
  yield put(fetchLocationDetailsSuccessAction(response));
}

export default function* watchFetchLocation() {
  yield takeLatest(locationTypes.SET_LOCATION_ID, fetchLocation);
}
