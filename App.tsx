import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator.tsx';

const MainApp = (): React.JSX.Element => (
  <SafeAreaProvider>
    <NavigationContainer>
      <MainNavigator  />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default MainApp;

