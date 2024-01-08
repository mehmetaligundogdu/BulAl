import React from 'react';
import {FlatList} from 'react-native';
import {ProductCard} from '../../components/ProductCard';
import {useFetch} from '../../hooks/useFetch';
import {Error, Loading, Welcome} from '../../components/Animations';

const url = 'https://fakestoreapi.com/products';

const Products = ({navigation}) => {
  const {productList, loading, error, showWelcome} = useFetch(url); //useFetch hook'umuzdan stateleri alıyoruz.
  const handleProductSelect = id => {
    //navigasyon ile yönlendirildiğin sayfaya, id parametresini de götür.
    navigation.navigate('DetailsPage', {id});
  };
  const renderProduct = ({item}) => (
    //item içinde id parametresi de var. item.id ile id'yi alıp handleProductSelect fonksiyonuna gönder.
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
