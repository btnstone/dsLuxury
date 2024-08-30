import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;  // 无参数传递给Home
  Details: undefined;  // 无参数传递给Details
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
