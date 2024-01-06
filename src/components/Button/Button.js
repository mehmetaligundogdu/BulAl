import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './Button.style';

const Button = ({text, press}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={press}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
