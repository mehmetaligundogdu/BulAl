import React from 'react';
import {Button, View, FlatList} from 'react-native';
import {ProductCard} from '../../components/ProductCard';
import {useFetch} from '../../hooks/useFetch';
import {useDispatch} from 'react-redux';
import {Error, Loading, Welcome} from '../../components/Animations';

const url = 'https://fakestoreapi.com/products';

const Products = ({navigation}) => {
  const dispatch = useDispatch();
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
  return (
    <View>
      <Button
        title="Log Out"
        onPress={() => dispatch({type: 'SET_USER', payload: {user: null}})}
      />
      <FlatList data={productList} renderItem={renderProduct} />
    </View>
  );
};

export {Products};
