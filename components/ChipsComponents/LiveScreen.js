import React from 'react';
import { View, Text } from 'react-native';
import TopNavigationDiscovery from './TopNavigationDiscovery'

const LiveScreen = ({navigation}) => {
  return (
    <View>
      <TopNavigationDiscovery back={() => navigation.navigate('Odkrywaj')} />
      <Text>Live screen</Text>
    </View>
  );
};

export default LiveScreen;
