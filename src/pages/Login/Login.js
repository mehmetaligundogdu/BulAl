import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {styles} from './Login.style';

const Login = () => {
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
        onSubmit={formValues => console.log(formValues)}>
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
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export {Login};
