import { AppLoading, registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import React from 'react';
import { Provider } from 'react-redux';
import './App/config/ReactronConfig';
import RootContainer from './App/modules/RootContainer';
import reduxStore from './App/redux/Store';

console.disableYellowBox = true;
class App extends React.Component {
  state = {
    isReady: false
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={reduxStore.store}>
        <RootContainer />
      </Provider>
    );
  }

  async _cacheResourcesAsync() {
    return Font.loadAsync({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });
  }
}

// allow reactotron overlay for fast design in dev mode
export default registerRootComponent(__DEV__ ? console.tron.overlay(App) : App);
