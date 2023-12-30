import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
  },
  body_container: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#FFA500',
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 15,
    padding: 5,
  },
  price: {
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
