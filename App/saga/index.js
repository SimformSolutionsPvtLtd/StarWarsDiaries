import { all, takeLatest } from 'redux-saga/effects';
import API from '../services/Api';
import { HomeTypes } from '../redux/HomeRedux';
import { getVehicles } from './Home';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const apiHome = API.home();

export default function* rootSaga() {
  yield all([takeLatest(HomeTypes.VEHICLE_REQUEST, getVehicles, apiHome)]);
}
