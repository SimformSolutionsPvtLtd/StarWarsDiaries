import React from 'react';
import { Provider } from 'react-redux';
import '../config/ReactronConfig';
import reduxStore from '../redux/Store';
import RootContainer from './RootContainer';
import { AppRegistry } from 'react-native';
import { registerRootComponent } from 'expo';


const App = () => {
  return (
    <Provider store={reduxStore.store}>
      <RootContainer />
    </Provider>
  );
};
// allow reactotron overlay for fast design in dev mode
export default registerRootComponent(__DEV__ ? console.tron.overlay(App) : App);
