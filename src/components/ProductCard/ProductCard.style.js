import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 20,
    flexDirection: 'row',
  },
  inner_container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    backgroundColor: '#FFA500',
    marginLeft: 10,
    padding: 10,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
  },
  price: {
    padding: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
