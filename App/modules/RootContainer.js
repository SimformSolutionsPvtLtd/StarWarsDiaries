import React from 'react';
import { StatusBar, View } from 'react-native';
import HomeScreen from '../modules/Home/HomeScreen';
import { ApplicationStyles } from '../theme';

const RootContainer = () => {
  return (
    <View style={[ApplicationStyles.screen.mainContainer]}>
      <StatusBar translucent barStyle="dark-content" />
      <HomeScreen />
    </View>
  );
};

export default RootContainer;
