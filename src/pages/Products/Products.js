import React from 'react';
import {View, FlatList} from 'react-native';
import {ProductCard} from '../../components/ProductCard';
import {useFetch} from '../../hooks/useFetch';
import {Error, Loading, Welcome} from '../../components/Animations';

const url = 'https://fakestoreapi.com/products';
const Products = ({navigation}) => {
  //Statelerimizi custom hooksta tutuyoruz.
  // const [productList, setProductList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const {productList, loading, error, showWelcome} = useFetch(url); //useFetch hook'umuzdan stateleri alıyoruz.

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
  const handleProductSelect = id => {
    navigation.navigate('DetailsPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading || showWelcome) {
    return <Welcome />;
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={productList} renderItem={renderProduct} />;
};

export {Products};
