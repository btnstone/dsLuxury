import React, {useEffect} from 'react';
import {View, Text, Button, Alert, Platform, Linking} from 'react-native';
import {HomeScreenNavigationProp} from '../type/navigation/definitions.ts';
import {useNavigation} from '@react-navigation/native';
import NfcManager from 'react-native-nfc-manager';

// 初始化 NFC Manager
NfcManager.start();

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    // 检查设备是否支持 NFC
    checkNfcSupportAndStatus();
  }, []);

  const checkNfcSupportAndStatus = async () => {
    // 检查设备是否支持 NFC
    const isNfcSupported = await NfcManager.isSupported();
    console.log(isNfcSupported);
    if (!isNfcSupported) {
      Alert.alert('NFC 不支持', '您的设备不支持 NFC 功能');
      return;
    }

    // 检查 NFC 是否启用
    const isNfcEnabled = await NfcManager.isEnabled();
    if (!isNfcEnabled) {
      Alert.alert(
        'NFC 未启用',
        'NFC 功能尚未启用，请在设置中开启。',
        [
          {
            text: '打开 NFC 设置',
            onPress: () => {
              // 跳转到 NFC 设置
              if (Platform.OS === 'android') {
                Linking.openSettings();
              } else {
                Alert.alert('请手动打开 NFC 设置');
              }
            },
          },
          { text: '取消', style: 'cancel' },
        ],
      );
    }
  };


  return (
    <View className={'flex-1 justify-center items-center'}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
