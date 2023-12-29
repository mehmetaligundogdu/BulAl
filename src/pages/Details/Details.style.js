import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    padding: 10,
  },
  image: {
    width: width,
    height: width / 3,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
  },
  detail: {},
  price: {},
});
