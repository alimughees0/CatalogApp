import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import ProductsScreen from './src/ProductsScreen';
import ProductDetails from './src/ProductDetails';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#000'},
            headerTitleStyle: {color: '#fff'},
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Products"
          options={{
            title: 'Our Products',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#000'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
          }}
          component={ProductsScreen}
        />
        <Stack.Screen
          name="ProductDetails"
          options={{
            title: 'Product Details',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#000'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
          }}
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
