import { combineReducers } from 'redux';
import apod from './apod';
import { penderReducer as pender } from 'redux-pender';

export default combineReducers({
  apod,
  pender
});