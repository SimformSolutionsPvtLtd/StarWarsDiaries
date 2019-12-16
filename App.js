import { AppLoading, registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './App/redux/Store';
import RootContainer from './App/modules/RootContainer';

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
      'OpenSans-Bold': require('./App/assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Regular': require('./App/assets/fonts/OpenSans-Regular.ttf')
    });
  }
}

export default registerRootComponent(App);
