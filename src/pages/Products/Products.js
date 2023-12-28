import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {ProductCard} from '../../components/ProductCard';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data} = await axios.get('https://fakestoreapi.com/products');
      setProductList(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };
  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size="large" color="#FFA500" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={productList} renderItem={renderProduct} />
    </View>
  );
};

export {Products};
