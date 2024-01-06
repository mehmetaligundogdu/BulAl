import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, value, onType, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={30} color="#febb75" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
      {/* placeholder={placeholder} Loginde kullandığımız input componentinin placeholderini props ile alıp, komponentin asıl yerinde (burada) kullandık */}
    </View>
  );
};

export {Input};
