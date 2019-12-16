import { combineReducers } from 'redux';
import { homeReducer } from './HomeRedux';

export default combineReducers({
  home: homeReducer
});
