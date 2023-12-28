import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {ProductCard} from '../../components/ProductCard';

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products');
    setProductList(data);
  };
  const renderProduct = ({item}) => <ProductCard product={item} />;

  return (
    <View>
      <FlatList data={productList} renderItem={renderProduct} />
    </View>
  );
};

export {Products};
