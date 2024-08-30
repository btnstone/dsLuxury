import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '~/screens/HomeScreen';
import SettingsScreen from '~/screens/SettingsScreen.tsx';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = (): React.JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
