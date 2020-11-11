import React from 'react';
import { Chip } from 'react-native-paper';

const ChipDiscover = (props) => {
  return (
    <Chip
      icon={props.icon}
      onPress={() => console.log('Pressed')}
      style={{
        height: 50,
        width: '90%',
        alignItems: 'center',
        margin: 8,
        backgroundColor: props.color
      }}
      onPress={props.press}
      selectedColor='white'
    >
      {props.title}
    </Chip>
  );
};

export default ChipDiscover;
