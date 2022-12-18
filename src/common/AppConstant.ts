/**
 * @ Author: omar abu alhija
 
 * @ Modified by: Your name
 * @ Modified time: 2022-12-12 19:57:07
 * @ Description:
 */

import {Platform} from 'react-native';
const AppURL: string = 'https://api.themoviedb.org/';
const API_KEY: string = '8316be82a3fedf91e83245534d306be3';

const mainNumber: number = 20;
const subNumber: number = 8;
const marginCard: number = 5;
const PasswordRgx: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
const emailRgx: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PlatformOS: 'ios' | 'android' | 'windows' | 'macos' | 'web' = Platform.OS;
export default {
  mainNumber,
  subNumber,
  AppURL,
  marginCard,
  PlatformOS,
  PasswordRgx,
  emailRgx,
  API_KEY,
};
