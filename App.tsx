import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/index.tsx';

const MainApp = (): React.JSX.Element => (
  <SafeAreaProvider>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default MainApp;

