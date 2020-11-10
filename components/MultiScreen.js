import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Divider, List, Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const MultiScreen = (props) => {
  return (
    <View >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '60%'
        }}
      >
              <MaterialCommunityIcons name={props.icon} color='grey' size={120} />
          </View>
          <View
              style={{
                  alignItems: 'center',
                    justifyContent: 'space-between',
                  height: '35%'
              }}
          >
        <Text
          style={{
            fontSize: 22,
            fontWeight:'bold',
            textAlign:'center'
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
        <Button mode='contained' >
          {props.button}
        </Button>
      </View>
    </View>
  );
};

export default MultiScreen;
