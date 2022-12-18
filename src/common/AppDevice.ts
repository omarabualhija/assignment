import {Dimensions, Platform, I18nManager} from 'react-native';

const {width, height, scale}: {width: number; height: number; scale: number} =
  Dimensions.get('window');
const isRTL = I18nManager.isRTL;
export default {
  width,
  height,
  scale,
  isRTL,
};
