import React from 'react';
import LottieView from 'lottie-react-native';
import {styles} from '../Animation.style';

const Loading = () => {
  return (
    <LottieView
      style={styles.animation}
      source={require('../../../assets/loading.json')}
      autoPlay
      loop
    />
  );
};

export {Loading};
