import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Details.style';
import {useFetch} from '../../hooks/useFetch';

import {Error, Loading, Welcome} from '../../components/Animations';
const url = 'https://fakestoreapi.com/products';

const Details = ({route}) => {
  const {id} = route.params;
  const {loading, error, data, showWelcome} = useFetch(`${url}/${id}`);
  if (loading || showWelcome) {
    return <Welcome />;
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: 'data.image'}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.detail}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
};

export {Details};
