import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Products} from './pages/Products';
import {Details} from './pages/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} />
        <Stack.Screen name="DetailsPage" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
