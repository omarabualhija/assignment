import {
  StyleSheet,
  Text,
  View,
  Pressable,
  I18nManager,
  Alert,
} from 'react-native';
import React from 'react';
import {AppColor, AppDevice, AppIcon, AppLanguage} from '../common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules

const HeaderApp = ({navigation, title}) => {
  let handleChangeLang = async () => {
    let lang = await AsyncStorage.getItem('@AppLang');
    lang == undefined ? 'en' : lang;
    await AsyncStorage.setItem('@AppLang', lang == 'en' ? 'ar' : 'en');
    AppLanguage.setLanguage(lang == 'en' ? 'ar' : 'en');
    I18nManager.allowRTL(lang == 'en');
    I18nManager.forceRTL(lang == 'en');
    RNRestart.Restart();
  };

  return (
    <View
      style={{
        width: AppDevice.width,
        height: 70,
        backgroundColor: AppColor.main,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
      }}>
      <Text style={{fontSize: 18, fontWeight: '700', color: AppColor.primary}}>
        {title}
      </Text>

      <AppIcon
        onPress={() => handleChangeLang()}
        name="language"
        type="FontAwesome"
        size={30}
      />
    </View>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({});
