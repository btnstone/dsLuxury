import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = ({text}: {text: string}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 20, color: 'red'}}>{text}</Text>
  </View>
);

const BottomTabNavigator = (): React.JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home1"
        children={() => <HomeScreen text="home1" />}
        options={{tabBarLabel: 'Home 1'}}
      />
      <Tab.Screen
        name="Home2"
        children={() => <HomeScreen text="home2" />}
        options={{tabBarLabel: 'Home 2'}}
      />
      <Tab.Screen
        name="Home3"
        children={() => <HomeScreen text="home3" />}
        options={{tabBarLabel: 'Home 3'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
