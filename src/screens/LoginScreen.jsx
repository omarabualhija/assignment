import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppColor, AppConstant, AppDevice, AppLanguage} from '../common';
import {userLoginAction} from '../redux/Actions/userAction';
import {useDispatch} from 'react-redux';

const LoginScreen = () => {
  let dispatch = useDispatch();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [emailValidation, setEmailValidation] = useState(false);
  let [passwordValidation, setPasswordValidation] = useState(false);

  let handelChangeText = (type, txt) => {
    switch (type) {
      case 1: {
        setEmailValidation(false);
        setEmail(txt);
        if (AppConstant.emailRgx.test(txt)) {
          setEmailValidation(true);
        }
        break;
      }
      case 2: {
        setPasswordValidation(false);
        setPassword(txt);
        if (AppConstant.PasswordRgx.test(txt)) {
          setPasswordValidation(true);
        }
        break;
      }
    }
  };

  let handleUserLogin = () => {
    dispatch(userLoginAction({email, password}));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 5}}>
      <View style={{marginVertical: 40, width: '100%'}}>
        <Text
          style={{
            color: AppColor.primary,
            fontSize: 17,
            fontWeight: '700',
            lineHeight: 24,
          }}>
          {AppLanguage.welcomeLogin}
        </Text>
      </View>
      <View style={styles.txtInputContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder={AppLanguage.enterEmail}
          value={email}
          onChangeText={t => {
            handelChangeText(1, t);
          }}
        />
        <TextInput
          style={styles.txtInput}
          placeholder={AppLanguage.enterEmail}
          value={password}
          onChangeText={t => handelChangeText(2, t)}
        />
      </View>
      <Pressable
        onPress={() => handleUserLogin()}
        disabled={!passwordValidation || !emailValidation}
        style={[
          styles.btn,
          {
            width: '100%',
            height: 45,
            backgroundColor:
              !emailValidation || !passwordValidation
                ? AppColor.stepInActive
                : AppColor.primary,
          },
        ]}>
        <Text style={styles.loginTxt}>{AppLanguage.login}</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  txtInputContainer: {},
  txtInput: {
    width: AppDevice.width - 10,
    borderColor: AppColor.primary,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
    color: AppColor.darkGray,
    height: 45,
    paddingHorizontal: 10,
  },
  loginTxt: {
    color: '#FFF',
    fontSize: 18,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
