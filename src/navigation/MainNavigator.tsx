import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import DetailsScreen from '~/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
