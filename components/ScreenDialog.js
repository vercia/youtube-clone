import React from 'react';
import { View } from 'react-native';
import { List, Divider } from 'react-native-paper';

const ScreenDialog = (props) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <List.Section>
        <List.Subheader>Połącz się z urządzeniem:</List.Subheader>
        <List.Item
          title='AirPlay & Bluetooth devices'
          left={() => <List.Icon icon='airplay' />}
        />
        <List.Item
          title='Połącz za pomocą kodu z telewizora'
          left={() => <List.Icon color='#000' icon='television-play' />}
        />
        <List.Item
          title='Więcej informacji'
          left={() => <List.Icon color='#000' icon='information-outline' />}
        />
        <Divider />
        <List.Item
          title='Anuluj'
          left={() => <List.Icon color='#000' icon='close' />}
          onPress={props.close}
        />
      </List.Section>
    </View>
  );
};

export default ScreenDialog;
