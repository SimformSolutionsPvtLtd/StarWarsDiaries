import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  vehicleRequest: ['page'],
  vehicleSuccess: ['data'],
  vehicleFailure: ['error']
});

export const HomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  haveMore: true,
  vehicles: [],
  fetching: false,
  error: null
});

/* ------------- Selectors ------------- */
export const HomeSelectors = {
  getData: state => state.data
};

/* ------------- Reducers ------------- */
// request the data from an api
export const requestVehicleList = state => state.merge({ fetching: true });

// successful api lookup
export const successVehicleList = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    vehicles: state.vehicles.concat(data.results),
    haveMore: data.next !== null
  });
};

// Something went wrong somewhere.
export const failureVehicleList = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error });
};

/* ------------- Hookup Reducers To Types ------------- */

export const homeReducer = createReducer(INITIAL_STATE, {
  [Types.VEHICLE_REQUEST]: requestVehicleList,
  [Types.VEHICLE_SUCCESS]: successVehicleList,
  [Types.VEHICLE_FAILURE]: failureVehicleList
});
