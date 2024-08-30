import React from 'react';
import {View, Text, Button} from 'react-native';
import {HomeScreenNavigationProp} from '../type/navigation/definitions.ts';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
