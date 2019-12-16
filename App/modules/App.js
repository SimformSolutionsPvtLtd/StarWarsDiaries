import React from 'react';
import { Provider } from 'react-redux';
import '../config/ReactronConfig';
import reduxStore from '../redux/Store';
import RootContainer from './RootContainer';
import { registerRootComponent } from 'expo';
console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={reduxStore.store}>
      <RootContainer />
    </Provider>
  );
};
// allow reactotron overlay for fast design in dev mode
export default registerRootComponent(__DEV__ ? console.tron.overlay(App) : App);
