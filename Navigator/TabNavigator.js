import { View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import LoginScreen from '../screen/LoginScreen';
import SearchScreen from '../screen/SearchScreen';
import ReelsScreen from '../screen/ReelsScreen';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >

      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused ,size }) => (
          <Image
            style={{ width: size, height:focused ? size+5: size, tintColor: focused ? 'dodgerblue' : 'black' }} // رنگ آیکون
            source={
              focused
                ? require('../assets/fill-home-1.png') 
                : require('../assets/instagram-home-feed-icon.png')
            }
          />
          
        ),
      }} />

      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({focused, size }) => (
          <Image style={{ width: size, height: size, tintColor: focused ? 'dodgerblue' : 'black' }} 
           source={require('../assets/instagram-search-icon.png')} />
        ),
      }} />
      <Tab.Screen name="Add" component={LoginScreen} options={{
        tabBarIcon: ({ size }) => (
          <Image style={{ width: size, height: size }} source={require('../assets/instagram-add-new-post-icon.png')} />
        ),
      }} />

      <Tab.Screen name="Reals" component={ReelsScreen} options={{
        tabBarIcon: ({ focused ,size }) => (
          <Image style={{ width: size, height: size, tintColor: focused ? 'dodgerblue' : 'black' }} source={ !focused ? require('../assets/instagram-reels-icon (1).png'): 
            require('../assets/reels-fill.png') 
          } />
        ),
      }} />

      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ size }) => (
          <View>
            <Image
              source={require('../assets/alirezaakbari.jpg')}
              style={{ width: size, height: size, borderRadius: size / 2 }}
            />
          </View>
        ),
      }}
      />

    </Tab.Navigator>
  )
}

export default TabNavigator