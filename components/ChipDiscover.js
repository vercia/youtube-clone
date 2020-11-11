import React from 'react';
import { Chip } from 'react-native-paper';

const ChipDiscover = (props) => {
  return (
    <Chip
      icon={props.icon}
      onPress={() => console.log('Pressed')}
      style={{
        height: 50,
        width: '45%',
        alignItems: 'center',
        margin: 5
      }}
      onPress={props.press}
    >
      {props.title}
    </Chip>
  );
};

export default ChipDiscover;
