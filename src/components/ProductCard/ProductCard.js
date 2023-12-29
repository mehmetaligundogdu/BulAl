import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image style={styles.image} source={{uri: product.image}} />
          <View style={styles.body_container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price} ₺</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export {ProductCard};
