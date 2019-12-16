import { call, put } from 'redux-saga/effects';
import HomeActions from '../redux/HomeRedux';
import { getError } from '../services/Utils';

/**
 * Handling the response of API
 *
 * @param {*} response response of API
 */
function* handleResponse(response) {
  if (response?.count > 0) {
    yield put(HomeActions.vehicleSuccess(response));
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.vehicleFailure(error));
  }
}

/**
 * Worker Saga : Getting all vehicle list from api using page number param
 *
 * @param {*} api Object containing API methods
 * @param {*} action action that was dispatched
 */
export function* getVehicles(api, action) {
  const response = yield call(api.getAllVehicles, action.page);
  yield* handleResponse(response.data);
}
