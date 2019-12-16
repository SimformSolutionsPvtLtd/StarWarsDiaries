import React from 'react';
import { StatusBar, View } from 'react-native';
import HomeScreen from '../modules/Home/HomeScreen';
import { ApplicationStyles } from '../theme';

/**
 * It serves as a wrapper for application.
 *
 * @returns root container of application,
 */
const RootContainer = () => {
  return (
    <View style={ApplicationStyles.screen.mainContainer}>
      <StatusBar translucent barStyle="dark-content" />
      <HomeScreen />
    </View>
  );
};

export default RootContainer;
