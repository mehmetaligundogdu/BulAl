import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './Input.style';

const Input = ({placeholder, value, onType}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
      />
      {/* placeholder={placeholder} Loginde kullandığımız input componentinin placeholderini props ile alıp, komponentin asıl yerinde (burada) kullandık */}
    </View>
  );
};

export {Input};
