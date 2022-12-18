import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {AppColor, AppDevice, AppImage} from '../common';
import {cachImage} from '../util';

const HomeCardApp = ({movie}) => {
  return (
    <View
      style={{
        width: AppDevice.width / 2 - 10,
        alignItems: 'center',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}>
      <Image
        defaultSource={AppImage.defaultSource}
        style={{
          width: '100%',
          height: AppDevice.width * 0.7,
          resizeMode: 'stretch', //Here, the image size must be according to the Aspect Ratio. However, the API does not support multiple image sizes.
        }}
        source={{
          uri:
            'https://image.tmdb.org/t/p/original/' +
            movie?.poster_path +
            '?' +
            cachImage(),
        }}
      />
      <Text
        numberOfLines={2}
        style={{
          fontSize: 18,
          color: AppColor.primary,
          marginTop: 8,
          height: 60,
        }}>
        {movie?.original_title.trim()}
      </Text>
    </View>
  );
};

export default HomeCardApp;

const styles = StyleSheet.create({});
