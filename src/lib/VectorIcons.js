import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {I18nManager} from 'react-native';

const AppIcon = ({
  type: iconType = 'MaterialIcons',
  name = 'email',
  color = '#000',
  size = 16,
  style = {},
  RTLenabled = true,
  onPress,
}) => {
  if (I18nManager.isRTL && RTLenabled) {
    if (name.includes('left')) {
      name = name.replace('left', 'right');
    } else if (name.includes('right')) {
      name = name.replace('right', 'left');
    }
  }
  if (I18nManager.isRTL && RTLenabled) {
    if (name.includes('back')) {
      name = name.replace('back', 'forward');
    } else if (name.includes('forward')) {
      name = name.replace('forward', 'back');
    }
  }

  switch (iconType) {
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'AntDesign':
      return (
        <AntDesign
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );

    case 'EvilIcons':
      return (
        <EvilIcons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'Feather':
      return (
        <Feather
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'Fontisto':
      return (
        <Fontisto
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'Octicons':
      return (
        <Octicons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );

    default:
      return (
        <FontAwesome
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={() => onPress()}
        />
      );
  }
};

export default AppIcon;
