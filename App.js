import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import SubscriptionScreen from './components/SubscriptionScreen';
import HomeScreen from './components/HomeScreen'
import DiscoverScreen from './components/DiscoverScreen'
import NotificationsScreen from './components/NotificationsScreen'
import LibraryScreen from './components/LibraryScreen'
import TopNavigation from './components/TopNavigation';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TopNavigation/>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Główna') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Odkrywaj') {
              iconName = focused ? 'compass' : 'compass-outline';
            } else if (route.name === 'Subskrypcje') {
              iconName = focused ? 'clipboard-play' : 'clipboard-play-outline';
            } else if (route.name === 'Powiadomienia') {
              iconName = focused ? 'bell' : 'bell-outline';
            } else if (route.name === 'Biblioteka') {
              iconName = focused ? 'library-music' : 'library-music-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black'
        }}
      >
        <Tab.Screen name='Główna' component={HomeScreen} />
        <Tab.Screen name='Odkrywaj' component={DiscoverScreen} />
        <Tab.Screen name='Subskrypcje' component={SubscriptionScreen} />
        <Tab.Screen name='Powiadomienia' component={NotificationsScreen} />
        <Tab.Screen name='Biblioteka' component={LibraryScreen} />
      </Tab.Navigator>
      <StatusBar barStyle='dark-content' backgroundColor='#00BCD4' />
    </NavigationContainer>
  );
}
