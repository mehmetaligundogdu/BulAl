import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {styles} from './Login.style';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.bodyContainer}>
        <Input placeholder="Kullanıcı Adı" />
        <Input placeholder="Şifre" />
        <Button text="Giriş Yap" />
      </View>
    </SafeAreaView>
  );
};

export {Login};
