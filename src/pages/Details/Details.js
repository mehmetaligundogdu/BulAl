import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Details.style';
import {useFetch} from '../../hooks/useFetch';

import {Error, Loading} from '../../components/Animations';
const url = 'https://fakestoreapi.com/products';

const Details = ({route}) => {
  const {id} = route.params; //route.params içindeki id'yi al.
  const {loading, error, productList} = useFetch(`${url}/${id}`); //aldığın id'yi kullan.

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: productList.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{productList.title}</Text>
        <Text style={styles.detail}>{productList.description}</Text>
        <Text style={styles.price}>{productList.price} ₺</Text>
      </View>
    </View>
  );
};

export {Details};
