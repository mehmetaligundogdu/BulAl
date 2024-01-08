import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducer';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    setAuthLoading(false);
    AsyncStorage.getItem('@USER').then(userSession => {
      if (userSession) {
        setUser(JSON.parse(userSession));
        setAuthLoading(false);
      }
    });
  }, []);

  const store = createStore(reducers, {user, authLoading});
  return <Provider store={store}>{children}</Provider>;
};

export {AuthProvider};
