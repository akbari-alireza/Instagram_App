import { View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
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
                ? require('../assets/fill-home-1.png')   // وقتی انتخاب شده
                : require('../assets/instagram-home-feed-icon.png') // وقتی انتخاب نشده
            }
          />
          // <Image style={{ width: size, height: size }} source={require('../assets/instagram-home-feed-icon.png')} />
          // <Image style={{ width: size, height: size+5, }} source={require('../assets/fill-home-1.png')} />
        ),
      }} />

      <Tab.Screen name="Search" component={HomeScreen} options={{
        tabBarIcon: ({ size }) => (
          <Image style={{ width: size, height: size }} source={require('../assets/instagram-search-icon.png')} />
        ),
      }} />
      <Tab.Screen name="Add" component={HomeScreen} options={{
        tabBarIcon: ({ size }) => (
          <Image style={{ width: size, height: size }} source={require('../assets/instagram-add-new-post-icon.png')} />
        ),
      }} />

      <Tab.Screen name="Reals" component={HomeScreen} options={{
        tabBarIcon: ({ size }) => (
          <Image style={{ width: size, height: size }} source={require('../assets/instagram-reels-icon (1).png')} />
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