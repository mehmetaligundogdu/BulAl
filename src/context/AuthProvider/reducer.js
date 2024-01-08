import AsyncStorage from '@react-native-async-storage/async-storage';

export default function reducers(state, action) {
  switch (action.type) {
    case 'SET_USER':
      const {user} = action.payload;
      AsyncStorage.setItem('@USER', JSON.stringify(user));
      return {...state, user};
    case 'LOG_OUT':
      AsyncStorage.removeItem('@USER');
      return {...state, user: null};
    default:
      return state;
  }
}

// user nesnelerimisi asyncstorageden alacağımız için "store.js" e ihtiyaç duymadık. initialstate değerlerini AuthProvider da tutarız.
