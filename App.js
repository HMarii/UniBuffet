import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './assets/colors/colors'

import Home from './components/Home'
import Details from './components/Details'
import OrderDetails from './components/OrderDetails'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();

const HelloWorldApp = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            headerShown : false,
          }} />
          <Stack.Screen name="Details" component={Details} options={{
            headerShown : false,
          }} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} options={{
            headerShown : false,
          }} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    margin: 20,
    borderWidth: 1,
    padding: 10,
    color: colors.secondary,
  },
  button: {
    color: 'blue',
    fontWeight: 'bold'
  },
});

export default HelloWorldApp;