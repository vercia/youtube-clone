import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchDialog from './TopNavigationDialogs/SearchDialog';
import Test from './Test';

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Wyszukaj' component={SearchDialog} />
      <Stack.Screen name='Test' component={Test} />
    </Stack.Navigator>
  );
};

export default SearchStack;
