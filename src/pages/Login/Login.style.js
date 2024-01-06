import {StyleSheet, Platform, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
  },
  bodyContainer: {
    flex: 1,
  },
  loginText: {
    color: Platform.OS === 'android' ? 'black' : 'black',
  },
});
