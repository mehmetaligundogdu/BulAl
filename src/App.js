import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Products} from './pages/Products';
import {Details} from './pages/Details';
import {Login} from './pages/Login';
import {useSelector, useDispatch} from 'react-redux';
import {Loading} from './components/Animations';

const Stack = createNativeStackNavigator();

const App = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.authLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="ProductsPage"
              component={Products}
              options={{
                title: 'BulAl',
                headerStyle: {
                  backgroundColor: '#FFA500',
                },
                headerTitleStyle: {
                  color: 'black',
                  fontSize: 24,
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <Icon
                    name="logout"
                    size={30}
                    color="black"
                    onPress={() => dispatch({type: 'LOG_OUT'})}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="DetailsPage"
              component={Details}
              options={{
                title: 'Detay',
                headerStyle: {
                  backgroundColor: '#FFA500',
                },
                headerTitleStyle: {
                  color: 'black',
                  fontSize: 24,
                  fontWeight: 'bold',
                },
                headerTintColor: 'black',
              }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default App;
