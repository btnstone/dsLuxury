import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../type/navigation/definitions.ts';

const DetailsScreen = (): React.JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View className={'flex-1 justify-center items-center'}>
      <Text>Details Screen 你好</Text>
      <Button title="Go Back to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default DetailsScreen;
