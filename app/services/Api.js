import Secrets from 'react-native-config';
import { apiConfig } from './Utils';
const API_URL = 'https://swapi.co/api/'
const api = apiConfig(API_URL);

const home = () => {
  const getAllVehicles = (page) => api.get(`vehicles/?page=${page}`);

  return {
    getAllVehicles,
  };
};

export default {
  home
};
