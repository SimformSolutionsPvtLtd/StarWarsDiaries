import { combineReducers } from 'redux';
import { homeReducer } from './HomeRedux';

/**
 * All reducers are combined here making a rootReducer to pass to store
 */
export default combineReducers({
  home: homeReducer
});
