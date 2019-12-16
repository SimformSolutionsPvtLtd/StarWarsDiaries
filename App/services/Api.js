import { apiConfig } from './Utils';
import { API_URL } from '../constants/AppConsts';

const api = apiConfig(API_URL);

const home = () => {
  const getAllVehicles = page => api.get(`vehicles/?page=${page}`);

  return {
    getAllVehicles
  };
};

export default {
  home
};
