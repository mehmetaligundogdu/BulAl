import React from 'react';
import {SafeAreaView, View, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {styles} from './Login.style';
import {usePost} from '../../hooks/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post('https://fakestoreapi.com/auth/login', values);
  }
  if (error) {
    Alert.alert('BulAI', 'Bir Hata Oluştu!');
  }
  if (data) {
    if (data.status === 'error') {
      Alert.alert('BulAI', 'Kullanıcı Bulunamadı!');
    } else {
      navigation.navigate('ProductsPage');
    }
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.bodyContainer}>
            <Input
              placeholder="Kullanıcı Adı"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />

            <Input
              placeholder="Şifre"
              value={values.password}
              onType={handleChange('password')} //Inputta onChangeText'e onType dediğimiz için, propsun adı da onType oldu. Burada da handleChange'e atadık.
              iconName="key-chain"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export {Login};
