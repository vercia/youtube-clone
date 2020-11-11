import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TopNavigation from './TopNavigation';

const MultiScreen = (props) => {
  return (
    <View>
      <TopNavigation />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '50%'
        }}
      >
        <MaterialCommunityIcons name={props.icon} color='grey' size={120} />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '30%'
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            width: '80%',
            textAlign: 'center',
            fontSize: 16
          }}
        >
          {props.subtitle}
        </Text>
        <Button mode='contained'>{props.button}</Button>
      </View>
    </View>
  );
};

export default MultiScreen;
