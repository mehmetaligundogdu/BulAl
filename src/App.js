import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Products} from './pages/Products';
import {Details} from './pages/Details';
import {Login} from './pages/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
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
    </NavigationContainer>
  );
};

export default App;
