import {SafeAreaView, StyleSheet, Text, View, I18nManager} from 'react-native';
import React from 'react';
import ReduxWrapper from './src/ReduxWrapper';
import RNRestart from 'react-native-restart'; // Import package from node modules
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppLanguage} from './src/common';
import {useEffect} from 'react';

const App = () => {
  const getlang = async () => {
    let lang = await AsyncStorage.getItem('@AppLang');
    lang = lang == undefined ? 'en' : lang;

    if (lang == 'ar') {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      AppLanguage.setLanguage('ar');
    } else {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
      AppLanguage.setLanguage('en');
    }
  };

  useEffect(() => {
    getlang();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ReduxWrapper />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
