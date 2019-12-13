import { call, put } from 'redux-saga/effects';
import HomeActions from '../redux/HomeRedux';
import { getError } from '../services/Utils';

function* handleResponse(response) {
  if (response?.count > 0) {
    yield put(
      HomeActions.vehicleSuccess(response.results)
    );
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.vehicleFailure(error));
  }
}

export function* getVehicles(api, action) {
  const response = yield call(api.getAllVehicles, action.page);
  yield* handleResponse(response.data);
}
