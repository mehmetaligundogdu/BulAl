import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {styles} from './Button.style';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={loading}>
      {/*loading döndüğünde(true), butonun basılabilir durumunu ortadan kaldıralım ki, kullanıcı birden fazla istek atmasın */}
      {loading ? (
        <ActivityIndicator size="small" color="#A7D8F4" />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export {Button};
