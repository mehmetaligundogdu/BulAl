import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(Config.API_URL)
      .then(res => setProductList(res))
      .catch(err => console.log(err));
  };

  return (
    <View>
      <Text>Products {Config.API_URL}</Text>
      <FlatList data={productList} renderItem={fetchData} />
    </View>
  );
};

export {Products};
