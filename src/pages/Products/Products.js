import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {ProductCard} from '../../components/ProductCard';
import {useFetch} from '../../hooks/useFetch';

const url = 'https://fakestoreapi.com/products';
const Products = () => {
  //Statelerimizi custom hooksta tutuyoruz.
  // const [productList, setProductList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const {productList, loading, error} = useFetch(url); //useFetch hook'umuzdan stateleri alıyoruz.

  //custom hooks'a taşıdık
  // const fetchData = async () => {
  //   try {
  //     const {data} = await axios.get('https://fakestoreapi.com/products');
  //     setProductList(data);
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };
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
