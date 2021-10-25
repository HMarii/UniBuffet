import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './assets/colors/colors'
import Home from './components/Home'
import Details from './components/Details'
import OrderDetails from './components/OrderDetails'
import OrderSuccess from './components/OrderSuccess'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();

{/* 
  A WolfBüfé egy olyan egyetemi büfét biztosít, amivel ételeket tudnak rendelni,
  azok a személyek, akik neptun kóddal rendelkeznek.
  A Büfében számos fincsi étel található, még az időpontot is ki lehet választani.
  A megadott időpontban (+ szállítási idő) a megrendelő átveheti az ételt
  az egyetemi büfében.
  Persze ez az egész csak elméletben játszódik le.
  Remélem, hogy fincsi ételeket rendelsz majd meg! :)
*/}



const HelloWorldApp = () => {

  const Stack = createNativeStackNavigator();

  return (
    <>
    {/* Navigator */}
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
          <Stack.Screen name="OrderSuccess" component={OrderSuccess} options={{
            headerShown : false,
          }} />
      </Stack.Navigator>

  </NavigationContainer>
  </>
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