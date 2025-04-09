import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
// import HomeScreen from '../screen/HomeScreen';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screen/ProfileScreen';
import HomeScreen from '../screen/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Application" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
