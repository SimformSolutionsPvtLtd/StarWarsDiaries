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

/* ------------- Reducers ------------- */
// request the data from an api
export const requestVehicleList = state => state.merge({ fetching: true });

/**
 * Getting vehicle list successful
 *
 * @param {*} state current state
 * @param {*} action dispatched action
 * @returns updates states for fetching, vehicles and haveMore
 */
export const successVehicleList = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    vehicles: state.vehicles.concat(data.results),
    haveMore: data.next !== null
  });
};

/**
 * Something went wrong while fetching vehicles data
 *
 * @param {*} state current state
 * @param {*} action dispatched action
 * @returns updates states for error and fetching
 */
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
