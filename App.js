
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Brand from './components/login/Brand';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigator/StackNavigator';
export default function App() {
  return (
    <NavigationContainer >
     <StackNavigator/>
    </NavigationContainer>
  );
}
