import React from 'react';
import LottieView from 'lottie-react-native';
import {styles} from '../Animation.style';

const Error = () => {
  return (
    <LottieView
      style={styles.animation}
      source={require('../../../assets/error.json')}
      autoPlay
      loop
    />
  );
};

export {Error};
