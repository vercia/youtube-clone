import React from 'react';
import { View, Text } from 'react-native';
import TopNavigationDiscovery from './TopNavigationDiscovery';

const TopScreen = ({navigation}) => {
  return (
    <View>
      <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj') } />
      <Text>Top screen</Text>
    </View>
  );
};

export default TopScreen;
