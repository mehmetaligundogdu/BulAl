import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {styles} from './Login.style';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

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
            />
            <Input
              placeholder="Şifre"
              value={values.password}
              onType={handleChange('password')}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export {Login};
