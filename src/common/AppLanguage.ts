/**
 * @ Author: omar abu alhija
 
 * @ Modified by: Your name
 * @ Modified time: 2022-12-12 19:57:17
 * @ Description:
 */
import LocalizedStrings from 'react-native-localization';

let Languages = new LocalizedStrings({
  en: {
    ID: '1',
    enterEmail: 'enter your email',
    enterPass: 'enter your password',
    login: 'login',
    welcomeLogin: 'Welcome back, enter your email and password to login',
    welcome: 'welcome',
  },
  ar: {
    ID: '2',
    enterEmail: 'أدخل بريدك الإلكتروني',
    enterPass: 'أدخل كلمة السر',
    login: 'دخول',
    welcomeLogin:
      'مرحبًا بك مرة أخرى ، أدخل بريدك الإلكتروني وكلمة المرور لتسجيل الدخول',
    welcome: 'مرحباً',
  },
});
export default Languages;
