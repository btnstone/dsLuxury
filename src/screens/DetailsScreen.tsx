import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../type/navigation/definitions.ts';

const DetailsScreen = (): React.JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View className={'flex-1 justify-center items-center'}>
      <Text>Details Screen</Text>
      <Button title="Go Back to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default DetailsScreen;
