import { combineReducers } from 'redux';

import locationReducer from './location/location.reducer';
import searchReducer from './search/search.reducer';

export default combineReducers({
  location: locationReducer,
  search: searchReducer,
});
